import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'reports/json',                // Your JSON report path (must match your test output)
  reportPath: 'reports/html',             // Final report location (used in Jenkins)
  reportName: 'Multiple Cucumber HTML Report',
  metadata: {
    browser: {
      name: 'chrome',
      version: '114',
    },
    device: 'Dharani Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
});
