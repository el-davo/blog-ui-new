module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist/browser',
  root: 'dist/browser',
  staticFileGlobs: [
    'dist/browser/**.js',
    'dist/browser/**.css',
    "dist/browser/**.html",
    'dist/browser/assets/*',
    'dist/browser/assets/*'
  ],
  "runtimeCaching": [{
    urlPattern: /^https:\/\/prod-blog-backend.cfapps.io\/.*/,
    handler: 'networkFirst'
  }]
};
