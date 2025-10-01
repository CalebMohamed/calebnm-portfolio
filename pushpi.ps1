param(
  [string]$remote
)

$dst="home/caleb/portfolio-website/nginx/html/"

# clears staged and unstaged changed
git push
git reset HEAD .
./build.ps1
tar -C ./dist -cf - . | ssh $remote "sudo rm -rf $dst/*; sudo mkdir -p $dst; sudo tar -C $dst -xpf -"
