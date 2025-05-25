
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 10594, hash: 'fab580d4a31ea3b5f8eb9019ebfcc524e32b4a34ec018dd901870ac5f8a93d4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4033, hash: '17935b5bf0c91887aa8254697610c63203f57e660f401f3379809e390ad2cf76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YJ3MHHLC.css': {size: 7264, hash: '8qY+5e92H9Q', text: () => import('./assets-chunks/styles-YJ3MHHLC_css.mjs').then(m => m.default)}
  },
};
