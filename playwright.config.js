const { devices } = require('@playwright/test');

const config = {
    // option shared for all projects 
    timeout: 30000,
    use: {
        ignoredHTTPSErrors: true,
    },

    // options specific to each project browser size
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName: 'chromium',
                viewport: { width: 1200, height: 720 },
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPhone XR'],
                viewport: { width: 414, height: 896 },
            },

        }, {
            name: 'Tablet Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPad Air'],
                viewport: { width: 820, height: 1180 },
            },
        },
    ]
}

module.exports = config;