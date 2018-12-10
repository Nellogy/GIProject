import "reflect-metadata";
import { createConnection } from "typeorm";
import { tUsuario } from "./backEnd/entity/tUsuario";

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

createConnection().then(async connection => {

    let user = new tUsuario();
    user.nombre = "admin";
    user.password = "admin";
    user.rolName = "administrador";

    let myRep = connection.getRepository(tUsuario);
    await myRep.save(user);

    let result = await myRep.find();

    console.log("here I am: ", + result);

}).catch(error => console.log(error));
