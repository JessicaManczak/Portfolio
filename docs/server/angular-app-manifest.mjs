
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'Portfolio',
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
    'index.csr.html': {size: 11531, hash: 'e95529eae346079387aa67b17bc80555854a9ed7d439f914ee8ce8086b94be98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4970, hash: 'c44b9cd794102f77be28b14a33e7fcaa78d00528c2206312207c5ff1950ef83b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YJ3MHHLC.css': {size: 7264, hash: '8qY+5e92H9Q', text: () => import('./assets-chunks/styles-YJ3MHHLC_css.mjs').then(m => m.default)}
  },
};
