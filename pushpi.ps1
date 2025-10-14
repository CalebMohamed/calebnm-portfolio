param(
  [string]$remote
)

$dst="portfolio-website/nginx/html/"

# clears staged and unstaged changed
git push
git reset HEAD .
./build.ps1
# generates and copies the compressed dist
Remove-Item ./deploy.tar
tar -C dist -cf deploy.tar .
scp ./deploy.tar "${remote}:/tmp/deploy.tar"
# clears current dist folder and replaces with unpacked dist
ssh $remote "sudo rm -rf $dst/* && sudo mkdir -p $dst && sudo tar -C $dst -xpf /tmp/deploy.tar && sudo rm /tmp/deploy.tar"
