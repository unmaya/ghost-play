// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    // Force new line
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://sheltered-brushlands-8592.herokuapp.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: 'process.env.PORT'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
<<<<<<< HEAD
<<<<<<< HEAD
        url: 'http://ghost.fredmaya.com',
        // mail: {
        //     transport: 'sendgrid',
        //     host: 'smtp.sendgrid.net',
        //     options: {
        //         service: 'Sendgrid',
        //         auth: {
        //             user: process.env.SENDMAIL_USERNAME,
        //             pass: process.env.SENDMAIL_PASSWORD
        //         }
        //     }
        // },
=======
        url: process.env.MY_URL,
=======
        url: 'http://sheltered-brushlands-8592.herokuapp.com',
<<<<<<< HEAD
>>>>>>> 7f2e86d... index now forces production env
        mail: {
            // transport: 'sendgrid',
            // host: 'smtp.sendgrid.net',
            // options: {
            //     service: 'Sendgrid',
            //     auth: {
            //         user: process.env.SENDMAIL_USERNAME,
            //         pass: process.env.SENDMAIL_PASSWORD
            //     }
            // }
        },
>>>>>>> ce62484... New settings for postgre DB
=======
        mail: {},
>>>>>>> 5b7e280... New test with config adjustments
        database: {
            client: 'postgres',
            connection: {
              host: 'ec2-54-197-239-171.compute-1.amazonaws.com',
              user: 'gbqwjlqfsvuwwu',
              password: 'qzZjClbHq3tmzOFkqbFvO4G-tz',
              database: 'd2gfbuetfapac3',
              port: '5432'
        },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: 'process.env.PORT'
        }
    }
};

// Export config
module.exports = config;
