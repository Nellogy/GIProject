import "reflect-metadata";
import {createConnection} from "typeorm";

const config = require('./config');
const restify = require('restify');
const mysql = require('mysql');

const server = restify.createServer({
    name: config.name,
    version: config.version,
});

var connection = config.db.get;

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(3307, function () {
    console.log('%s Listening at %s', server.name, server.url);
});

server.get('/usuarios', function (req, res) {
    connection.query('SELECT * FROM tUsuario', function (error, results, fields) {
        if(error) throw error;
        res.end(JSON.stringify(results));
    });
});

createConnection().then(async connection => {

}).catch(error => console.log(error));
