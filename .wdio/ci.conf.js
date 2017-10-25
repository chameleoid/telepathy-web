exports.config = {
  specs: [ './test/**/*.js' ],
  exclude: [ ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'firefox'
  }],

  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,

  screenshotPath: 'screenshots',
  baseUrl: 'http://localhost:3000',

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd'
  },

  reporters: [ 'spec' ],

  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  services: [ 'browserstack' ],

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_PASS,
};
