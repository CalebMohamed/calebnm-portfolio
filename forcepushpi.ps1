param(
  [string]$remote
)

# clears staged and unstaged changed
git push
git reset HEAD .
# rebuilds
./build.ps1
# temporary addition of the new build
git add ./dist -f
git commit -m "temp dist"
# splits off the dist file into its own branch
git subtree split --prefix=dist -b dist-temp
# forces this branch on the remote and then deletes it locally
git push --force $remote dist-temp:master
git branch -D dist-temp
# finally removes the temp commit
git reset HEAD~1
