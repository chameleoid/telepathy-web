exports.config = {
  specs: [ './test/**/*.js' ],
  exclude: [ ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome',
    project: 'telepathy-web',
  }],

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

  services: [ 'browserstack' ],

  browserstackLocal: true,

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_PASS,
};
