import "reflect-metadata";
import {createConnection} from "typeorm";

const config = require('./config');
const restify = require('restify');
const mysql = require('mysql');

const server = restify.createServer({
    name: config.name,
    version: config.version
});

let connection = config.db.get;

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(3307, function(){
    console.log('%s Listening at %s', server.name, server.url);
});

server.get('/usuarios', function(req, res){
    connection.query('SELECT * FROM tUsuario', function(error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results));
    });
});

createConnection().then(async algo => {
    console.log("connection was created");
/* Inserting data in the user table on mySQL
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");*/

}).catch(error => console.log(error));
