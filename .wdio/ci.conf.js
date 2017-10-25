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

  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  services: [ 'browserstack' ],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      project: 'telepathy-web',
      'browserstack.local': true,
    },

    {
      browserName: 'safari',
      project: 'telepathy-web',
      'browserstack.local': true,
    },

    {
      browserName: 'firefox',
      project: 'telepathy-web',
      'browserstack.local': true,
    },
  ],

  browserstackLocal: true,

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_PASS,
};
