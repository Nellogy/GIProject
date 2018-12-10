import "reflect-metadata";
import { createConnection } from "typeorm";
import { tPermiso } from "./backEnd/entity/tPermiso";
import { tPiezas } from "./backEnd/entity/tPiezas";
import { tRol } from "./backEnd/entity/tRol";
import { tUsuario } from "./backEnd/entity/tUsuario";
import { tTipoPiezas } from "./backEnd/entity/tTipoPiezas";
import {isNullOrUndefined} from "util";

const corsMiddleware = require('restify-cors-middleware');
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


    const cors = corsMiddleware({
        preflightMaxAge: 5, //optional
        origins: ['*'],
        allowHeaders: ['API-Token'],
        exposeHeaders: ['API-Token-Expiry']
    });

    server.pre(cors.preflight);
    server.use(cors.actual);

    //Restify
    server.use(restify.plugins.bodyParser({
        mapParams: true,
    }));

    server.listen(3307, '127.0.0.1', function(){
        console.log('ready on %s', server.url);
    });


    server.get('/usuarios', async (req, res, next) => {
    //obtener lista de usuarios
        res.send({
            results: savedUsuarios,
        });
        next();
    });

    server.get('/piezas', async (req, res, next) => {
    //obtener lista de usuarios
        res.send({
            results: savedPiezas,
        });
        next();
    });

    server.get('/tipoPiezas', async (req, res, next) => {
    //obtener lista de usuarios
        res.send({
            results: savedTipoPiezas,
        });
        next();
    });

    server.post('/login', async (req, res, next) => {
    //obtener lista de usuarios
        let usr = req.body.usr;
        let pss = req.body.pss;
        let queryRes = await usuariosRepository.findOne({ nombre: usr, password: pss });

        if(isNullOrUndefined(queryRes)){
            res.send({
                exist: false,
            });
        } else {
            res.send({
                exist: true,
            });
        }
        next();
    });

    server.post('/piezasd', async (req, res, next) => {
    //obtener lista de usuarios
        let queryRes = await piezasRepository.findOne({ id: req.body.id });
        res.send({
            nombre: queryRes.nombre,
            fabricante: queryRes.fabricante
        });
        next();
    });
}).catch(error => console.log(error));