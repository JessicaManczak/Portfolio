
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jessicamanczak.de',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/xhr2/lib/browser.js": [
    {
      "path": "chunk-KHV2ILOJ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 11547, hash: 'eb27194b49991b430fc245230d06b86e5c48f778cfc6db84a90b7a6ba7d7db8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4986, hash: '695a6553bd8fb8b4ad4f5ffce1ae6a3e6de7ae75032695d1e2d4f504fcfb28cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YJ3MHHLC.css': {size: 7264, hash: '8qY+5e92H9Q', text: () => import('./assets-chunks/styles-YJ3MHHLC_css.mjs').then(m => m.default)}
  },
};
