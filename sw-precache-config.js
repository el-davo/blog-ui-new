module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist/browser',
  root: 'dist/browser',
  staticFileGlobs: [
    'dist/browser/index.html',
    'dist/browser/**.js',
    'dist/browser/**.css'
  ]
};
