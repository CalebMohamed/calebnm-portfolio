import os
import re

base_dir = "content/poems"

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".md"):
            path = os.path.join(root, file)
            with open(path, "r+", encoding="utf-8") as f:
                text = f.read()

            # Find TOML frontmatter between +++
            match = re.match(r"(?s)^\+\+\+(.*?)\+\+\+(.*)$", text)
            if not match:
                continue  # skip files without TOML frontmatter

            front, body = match.groups()

            # Only add if not already present
            if "[params]" not in front:
                front = front.rstrip() + "\n[params]\n  type = 'poem'\n  pageKey = 'src/poem.js'\n"

                new_text = f"+++{front}+++\n{body}"
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_text)

print("Done.")
