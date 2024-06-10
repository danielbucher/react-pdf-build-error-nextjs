This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I've sed node 20 for this. Suggested polyfills are imported in `app/layout.tsx`.

To setup the project:

```bash
npm install
npm run dev
```

Go to http://localhost:3000/, you should see the PDF render without issues.
Issue happens when you try to have a prod build with `npm run build`.

I get a very long error but I managed to find the following message:

```
static/media/pdf.worker.min.9b170941.mjs from Terser
x 'import', and 'export' cannot be used outside of module code
```
