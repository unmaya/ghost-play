// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    production: {
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
        mail: {
            transport: 'sendgrid',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'Sendgrid',
                auth: {
                    user: process.env.SENDMAIL_USERNAME,
                    pass: process.env.SENDMAIL_PASSWORD
                }
            }
        },
>>>>>>> ce62484... New settings for postgre DB
        database: {
            client: 'pg',
            connection: {
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;
