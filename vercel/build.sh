rm -rf .vercel
npm run build

mkdir -p .vercel/output
cp vercel/config.json .vercel/output

mkdir -p .vercel/output/static
cp -a dist/client/. .vercel/output/static

mkdir -p .vercel/output/functions/index.func
cp vercel/.vc-config.json .vercel/output/functions/index.func
npx ncc build --minify --out .vercel/output/functions/index.func vercel/handler.js