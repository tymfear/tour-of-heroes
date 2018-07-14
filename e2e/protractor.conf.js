const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'http://localhost:4200',
  framework: 'jasmine',
  directConnect: true,
  specs: ['specs/**/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
  },
  onPrepare() {
    const reporter = new SpecReporter(
      {
        spec: {displayStacktrace: false},
      },
    );

    jasmine.getEnv().addReporter(reporter);
  },
};
