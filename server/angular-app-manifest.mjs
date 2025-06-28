
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/for-us-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/for-us-app"
  },
  {
    "renderMode": 2,
    "route": "/for-us-app/gallery"
  },
  {
    "renderMode": 2,
    "route": "/for-us-app/quotes"
  },
  {
    "renderMode": 2,
    "route": "/for-us-app/countdown"
  },
  {
    "renderMode": 2,
    "redirectTo": "/for-us-app",
    "route": "/for-us-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9641, hash: 'c18438ce6f4d6065fc12275c76208041bb76628f96a9fa8ea1fc1644dfb1005e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9727, hash: '8c2289fcaad37b6506ae13754f1343a4c341b053bf1be12bd871ee7e60b7721a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'countdown/index.html': {size: 11741, hash: '317f0d9991f319e406bf3297ac6dcc6dab0e0bcedb5aa06e7354ba4048fb57d5', text: () => import('./assets-chunks/countdown_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11841, hash: '6fc344aca262c8ddb46fc242d9d02f9492af1faad75618d359dda6541add007a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 15072, hash: '98ef1f309ea5e6973f4d95b828ed62853a5394b06f91d102419ffdf8f7b89250', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'quotes/index.html': {size: 11695, hash: 'cff559c09f46acc1b6a74791781ae177e63de7a6ed06b4501b88288db0f91a79', text: () => import('./assets-chunks/quotes_index_html.mjs').then(m => m.default)},
    'styles-YIT2JSNR.css': {size: 575, hash: 'X0Xu4Nueres', text: () => import('./assets-chunks/styles-YIT2JSNR_css.mjs').then(m => m.default)}
  },
};
