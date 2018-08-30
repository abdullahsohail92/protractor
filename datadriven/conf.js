// An example configuration file.
var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');
exports.config = {
    chromeOnly: true,
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    //specs: ['ExcelToJson.js'],
    specs: ['./Testcases/Angular_Test_Suite.js'],



    ////////////////

    onPrepare: function () {
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: 'reports-tmp',
            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
                // Example: '30-12-2016/firefox/list-should work'.
                var currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear();

                var validDescriptions = descriptions.map(function (description) {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year,
                    // capabilities.get('browserName'),
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());
    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
    }
}


//////////////////
