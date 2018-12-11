import "reflect-metadata";
import { createConnection } from "typeorm";
import { tPermiso } from "./backEnd/entity/tPermiso";
import { tPiezas } from "./backEnd/entity/tPiezas";
import { tRol } from "./backEnd/entity/tRol";
import { tUsuario } from "./backEnd/entity/tUsuario";
import { tTipoPiezas } from "./backEnd/entity/tTipoPiezas";
import { isNullOrUndefined } from "util";

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
    let tipoPiezasRepository = connection.getRepository(tTipoPiezas);

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
        piezasRepository = connection.getRepository(tPiezas);
        savedPiezas = await piezasRepository.find({ relations: ["idTipo"]});

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

    server.post('/piezasPOST', async (req, res, next) => {
        let queryRes = await piezasRepository.findOne({ id: req.body.id });
        res.send({
            nombre: queryRes.nombre,
            fabricante: queryRes.fabricante
        });
        next();
    });

    server.post('/deletePieza', async (req, res, next) => {
        let queryRes = await piezasRepository.findOne({ id: req.body.id });
        await piezasRepository.remove(queryRes);

        res.send({
            nombre: queryRes.nombre,
        });
        next();
    });

    server.post('/tipoPiezasID', async (req, res, next) => {
        tipoPiezasRepository = connection.getRepository(tTipoPiezas);
        let queryRes = await tipoPiezasRepository.findOne({ nombre: req.body.nombre });
        res.send({
            results: queryRes.id_tipo,
        });
        next();
    });

    server.post('/insertPieza', async (req, res, next) => {
        //Pieza data
        let newPieza = new tPiezas();
        newPieza.nombre = req.body.nombre;
        newPieza.fabricante = req.body.fabricante;
        newPieza.idTipo = await tipoPiezasRepository.findOne({nombre: req.body.tipoPiezaNombre });

        //save the Pieza
        await piezasRepository.save(newPieza);

        res.send({
            nombre: newPieza.nombre,
            idPieza: newPieza.id,
        });
        next();
    });

    server.post('/updatePieza', async (req, res, next) => {
        let piezaRepository = connection.getRepository(tPiezas);
        let pieza = await piezaRepository.findOne(req.body.id);

        pieza.nombre = req.body.nombre;
        pieza.fabricante = req.body.fabricante;

        await piezasRepository.save(pieza);

        res.send({
            nombre: pieza.nombre,
            idPieza: pieza.id
        });

        await piezaRepository.save(pieza);
    });
}).catch(error => console.log(error));