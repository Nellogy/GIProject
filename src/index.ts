import "reflect-metadata";
import { createConnection, getConnection } from "typeorm";
import { tPermiso } from "./backEnd/entity/tPermiso";
import { tPiezas } from "./backEnd/entity/tPiezas";
import { tRol } from "./backEnd/entity/tRol";
import { tUsuario } from "./backEnd/entity/tUsuario";
import { tTipoPiezas } from "./backEnd/entity/tTipoPiezas";

const restify = require('restify');
const server = restify.createServer();

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "trabajogi1819",
    entities: [
        tUsuario,
        tPermiso,
        tRol,
        tPiezas,
        tTipoPiezas
    ],
    synchronize: true,
    logging: false
}).then( async connection => {
    //here you can start to work with your entities

    // Load tables into variables
    let savedRol = await connection.manager.find(tRol);
    let savedTipoPiezas = await connection.manager.find(tTipoPiezas);
    //let savedPermiso = await connection.manager.find(tPermiso);
    //let savedPiezas = await connection.manager.find(tPiezas);
    //let savedUsuario = await connection.manager.find(tUsuario);

    // Load data and metadata
    let usuariosRepository = connection.getRepository(tUsuario);
    let savedUsuarios = await usuariosRepository.find({ relations: ["rolName"]});

    let permisosRepository = connection.getRepository(tPermiso);
    let savedPermisos = await permisosRepository.find({ relations: ["rolName"]});

    let piezasRepository = connection.getRepository(tPiezas);
    let savedPiezas = await piezasRepository.find({ relations: ["idTipo"]});

    console.log(savedUsuarios);
    console.log(savedPermisos);
    console.log(savedRol);
    console.log(savedPiezas);
    console.log(savedTipoPiezas);

}).catch(error => console.log(error));

server.use(restify.plugins.bodyParser({
    mapParams: false,
}));

server.get('/\/(.*)?.*/', restify.plugins.serveStatic({
    directory: './frontEnd/js/Login.js',
    default: './frontEnd/html/Login.html',
    maxAge: 0
}));



//restify code
server.listen(3307, '127.0.0.1', function(){
    console.log('ready on %s', server.url);
});