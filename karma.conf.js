module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false
    },
    coverageIstanbulReporter: {
      reports: ['html','text'],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: true,
        skipFilesWithNoCoverage: true,
        global: {
          statements: 60,
          lines: 60,
          branches: 100,
          functions: 100
        },
        each: {
          statements: 60,
          lines: 60,
          branches: 100,
          functions: 100,
          overrides: {}
        }
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ["progress","coverage-istanbul", "dots", "junit"],
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,

  });
};
