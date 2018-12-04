import {Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne, Column} from "typeorm";

import {tTipoPiezas} from "./tTipoPiezas";

@Entity()
export class tPiezas {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Nombre: string;

    @Column()
    Fabricante: string;

    @Column()
    Id_tipo: string;

    @ManyToOne(type => tTipoPiezas, tTipoPiezas=> tTipoPiezas.Id_tipo)
    tPiezas: tPiezas;

}
