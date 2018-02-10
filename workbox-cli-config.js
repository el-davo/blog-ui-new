module.exports = {
  "globDirectory": "./dist/browser",
  "globPatterns": [
    "**/*.html",
    "**/*.js",
    "**/*.css",
    "**/*.png",
    "**/*.jpg",
    "**/*.svg"
  ],
  "swDest": "dist/browser/sw.js",
  "runtimeCaching": [{
    urlPattern: /^https:\/\/prod-blog-backend.cfapps.io\/.*/,
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/fonts.googleapis.com\/.*/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/ajax.cloudflare.com\/.*/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/s3-eu-west-1.amazonaws.com\/.*/,
    handler: 'networkFirst'
  }],
  "clientsClaim": true,
  "skipWaiting": true
};
