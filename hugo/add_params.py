#!/usr/bin/env python3
from pathlib import Path
import re

BASE = Path("content/poems")
FRONT_RE = re.compile(r"(?s)^\+\+\+(.*?)\+\+\+(.*)$")  # group1 = front, group2 = body

if not BASE.exists():
    raise SystemExit("content/poems not found - run from Hugo project root")

changed = 0
for md in BASE.rglob("*.md"):
    text = md.read_text(encoding="utf-8")
    m = FRONT_RE.match(text)
    if m:
        front, body = m.group(1), m.group(2)
    else:
        front, body = None, text

    # skip if already wrapped
    if body.lstrip().startswith("{{< poem") or body.lstrip().startswith("{{% poem"):
        continue

    # if there's no body (empty file) skip
    if not body.strip():
        continue

    # build wrapped body (preserve the body content as-is except for leading blank lines)
    new_body = "{{< poem >}}\n" + body.lstrip("\n") + "{{< /poem >}}"

    if front is not None:
        new_text = "+++" + front.rstrip() + "\n+++\n" + new_body
    else:
        new_text = new_body

    md.write_text(new_text, encoding="utf-8")
    changed += 1

print(f"Done. Files modified: {changed}")
