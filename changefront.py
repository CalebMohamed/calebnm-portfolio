#!/usr/bin/env python3
"""
Replace `type = "<string>"` with `colour = "<string>"` inside TOML front matter
for every markdown file under ./content (recurses).
"""

import re
from pathlib import Path

ROOT = Path("content")
TOML_FM_RE = re.compile(r"^(\+{3}\s*\n)(.*?)(\n\+{3}\s*\n?)", re.DOTALL | re.MULTILINE)
TYPE_ASSIGN_RE = re.compile(r'\btype\s*=\s*(".*?"|\'.*?\')')

files_changed = 0
replacements = 0

for md in ROOT.rglob("*.md"):
    text = md.read_text(encoding="utf-8")
    m = TOML_FM_RE.search(text)
    if not m:
        continue  # no TOML front matter
    fm_start, fm_body, fm_end = m.group(1), m.group(2), m.group(3)

    new_fm_body, nsub = TYPE_ASSIGN_RE.subn(lambda mo: f'colour = {mo.group(1)}', fm_body)
    if nsub:
        new_text = text[: m.start(2)] + new_fm_body + text[m.end(2) :]
        md.write_text(new_text, encoding="utf-8")
        files_changed += 1
        replacements += nsub
        print(f"Updated {md} — {nsub} replacement(s)")

print(f"\nDone. Files changed: {files_changed}. Total replacements: {replacements}.")
