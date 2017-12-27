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
  }, {
    urlPattern: /^https:\/\/fonts.googleapis.com\/.*/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/ajax.cloudflare.com\/.*/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/s3-eu-west-1.amazonaws.com\/.*/,
    handler: 'networkFirst'
  }]
};
