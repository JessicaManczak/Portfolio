
export default {
  basePath: 'https://jessicamanczak.de',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
