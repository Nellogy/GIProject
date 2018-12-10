const mysql = require('mysql');

module.exports = {
    name: 'GI1819',
    hostname: 'http://127.0.0.1',
    version:'0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3306,
    db: {
        get: mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'trabajogi1819'
        })
    }
};