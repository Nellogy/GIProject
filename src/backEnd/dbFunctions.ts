import "reflect-metadata";
import { createConnection } from "typeorm";
import {tUsuario} from "./entity/tUsuario";
import {tPermiso} from "./entity/tPermiso";
import {tRol} from "./entity/tRol";
import {tPiezas} from "./entity/tPiezas";
import {tTipoPiezas} from "./entity/tTipoPiezas";

//const restify = require('restify');

export function insertPieza (id, nombre, fabricante, tipo) {
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

        let pieza = new tPiezas();
        pieza.id = id;
        pieza.nombre = nombre;
        pieza.fabricante = fabricante;
        pieza.idTipo = tipo;
        return connection.manager.save(pieza).then(pieza => {
            console.log("Pieza has been correctly inserted with id: ", pieza.id);
        });

    }).catch(error => console.log(error));
}

export function updatePieza(id, nombre, fabricante) {
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
    }).then(async connection => {

        let piezaRepository = connection.getRepository(tPiezas);
        let pieza = await piezaRepository.findOne(id);

        pieza.nombre = nombre;
        pieza.fabricante = fabricante;

        await piezaRepository.save(pieza);

    }).catch(error => console.log(error));
}

export function deletePieza(id){
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
    }).then(async connection => {

        let piezaRepository = connection.getRepository(tPiezas);
        let pieza = await piezaRepository.findOne(id);
        await piezaRepository.remove(pieza);

    }).catch(error => console.log(error));
}

export function listaPiezas(category){
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

        let result = [];
        let piezasRepository = connection.getRepository(tPiezas);
        let savedPiezas = await piezasRepository.find({ relations: ["idTipo"]});

        for( let i=0; i<savedPiezas.length; i++){
            if(savedPiezas[i].idTipo.id_tipo === category){
                result.push(savedPiezas[i]);
            }
        }
        return result;

    }).catch(error => console.log(error));
}

export function loadPieza(id){
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

        return await connection.manager.find(id);

    }).catch(error => console.log(error));
}
