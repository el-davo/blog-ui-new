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
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/fonts.gstatic.com\/.*/,
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/ajax.cloudflare.com\/.*/,
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/s3-eu-west-1.amazonaws.com\/.*/,
    handler: 'fastest'
  }],
  "clientsClaim": true,
  "skipWaiting": true
};
