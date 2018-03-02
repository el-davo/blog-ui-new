// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const compose = require('docker-compose');
const waitOn = require('wait-on');

const opts = {
  resources: [
    'http://localhost:3000'
  ],
  delay: 1000,
  interval: 100,
  timeout: 30000,
  window: 1000,
};

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    const composePromise = compose.up({cwd: __dirname, log: true});
    const waitForPromise = new Promise((resolve, reject) => {
      waitOn(opts, err => err ? reject() : resolve());
    });

    return Promise.all([composePromise, waitForPromise]);
  },
  onComplete() {
    return compose.kill({cwd: __dirname, log: true});
  }
};
