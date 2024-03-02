require('dotenv/config')

exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }, {
        maxInstances: 1,
        browserName: 'firefox'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'cucumber',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },
}
