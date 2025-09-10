Remove-Item ./dist/* -Recurse
npm run build
cd blogs
hugo
cd ..
