import {Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne, Column} from "typeorm";

import {tTipoPiezas} from "./tTipoPiezas";

@Entity()
export class tPiezas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    fabricante: string;

    @ManyToOne(type => tTipoPiezas, tTipoPiezas=> tTipoPiezas.id_tipo)
    idTipo: tTipoPiezas;

}
