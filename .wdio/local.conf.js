exports.config = {
  specs: [ './test/**/*.js' ],
  exclude: [ ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'firefox',
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

  services: [ 'selenium-standalone' ],
};
