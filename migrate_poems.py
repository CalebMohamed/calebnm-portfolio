#!/usr/bin/env python3
import argparse, re, sys
from pathlib import Path
from datetime import date

PATTERN = re.compile(r'(?P<dd>\d{2})\.(?P<mm>\d{2})\.(?P<yy>\d{2})\.md$', re.ASCII)

def resolve_year(two_digit, pivot=1970):
    """Map 00–99 → full year. Default pivot: 1970..2069."""
    yr = int(two_digit)
    base = pivot - (pivot % 100)  # e.g. 1970 -> 1900
    full = base + yr
    if full < pivot: full += 100
    return full

def has_front_matter_toml(text):
    # TOML fence is +++ ... +++
    return text.startswith("+++")

def build_frontmatter(yyyy, mm, dd, title):
    return (
        "+++\n"
        f'date = "{yyyy:04d}-{mm:02d}-{dd:02d}"\n'
        f'title = "{title}"\n'
        "themes = []\n"
        "+++\n\n"
    )

def migrate_file(src_path: Path, dst_root: Path, pivot: int, bundle: bool, dry_run: bool):
    m = PATTERN.search(src_path.name)
    if not m:
        return False, f"skip (name doesn’t match): {src_path}"
    dd = int(m.group("dd")); mm = int(m.group("mm")); yy = m.group("yy")
    yyyy = resolve_year(yy, pivot=pivot)

    # Validate calendar date
    try:
        date(yyyy, mm, dd)
    except ValueError as e:
        return False, f"invalid date in filename: {src_path.name} ({e})"

    title = f"{dd:02d}.{mm:02d}.{yy}"
    fm = build_frontmatter(yyyy, mm, dd, title)

    # destination: content/poems/YYYY/MM/dd.md  OR as leaf bundle index.md
    dst_dir = dst_root / f"{yyyy:04d}" / f"{mm:02d}" / (f"{dd:02d}" if bundle else "")
    dst_dir.mkdir(parents=True, exist_ok=True)
    dst_file = dst_dir / ("index.md" if bundle else f"{dd:02d}.md")

    # read source
    text = src_path.read_text(encoding="utf-8")

    # don’t double-wrap if already has TOML fence
    if has_front_matter_toml(text):
        content = text
    else:
        content = fm + text

    if dst_file.exists():
        return False, f"destination exists, skipping: {dst_file}"

    action = f"{src_path} → {dst_file}"
    if dry_run:
        return True, f"[dry-run] {action}"
    dst_file.write_text(content, encoding="utf-8")
    # remove original only after successful write
    src_path.unlink()
    return True, action

def main():
    p = argparse.ArgumentParser(description="Migrate poems dd.mm.yy.md → TOML front matter + dated folders")
    p.add_argument("--src", default="content/poems", help="Source directory to scan (default: content/poems)")
    p.add_argument("--dst", default="content/poems", help="Destination root (default: content/poems)")
    p.add_argument("--pivot", type=int, default=1970, help="Century pivot for yy→yyyy (default 1970)")
    p.add_argument("--bundle", action="store_true", help="Create leaf bundles: YYYY/MM/DD/index.md")
    p.add_argument("--dry-run", action="store_true", help="Show what would happen, do not write")
    args = p.parse_args()

    src_root = Path(args.src)
    dst_root = Path(args.dst)

    if not src_root.exists():
        print(f"Source not found: {src_root}", file=sys.stderr); sys.exit(1)

    moved, skipped = 0, 0
    for path in src_root.rglob("*.md"):
        ok, msg = migrate_file(path, dst_root, args.pivot, args.bundle, args.dry_run)
        print(msg)
        moved += int(ok)
        skipped += int(not ok)

    print(f"\nDone. {'Would move' if args.dry_run else 'Moved'} {moved}, skipped {skipped}.")

if __name__ == "__main__":
    main()
