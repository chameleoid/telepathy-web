exports.config = {
  specs: [ './test/**/*.js' ],
  exclude: [ ],

  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,

  screenshotPath: 'screenshots',
  baseUrl: 'http://localhost:3000',

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
  },

  reporters: [ 'spec' ],

  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  services: [ 'phantomjs' ],

  maxInstances: 10,

  capabilities: [{
    maxInstances: 10,
    browserName: 'phantomjs',
  }],
};
