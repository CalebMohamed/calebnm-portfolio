param(
  [string]$remote
)

# clears staged and unstaged changed
git push
git reset HEAD .
# adds and commits dist temporarily
git add ./dist -f
git commit -m "temp dist for remote"
# pushes to remote and then resets to before adding dist
git subtree push --prefix=dist $remote main:master
git reset HEAD~1
