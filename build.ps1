Remove-Item ./dist/* -Recurse
cd vite
npm run build
cd ..
hugo
