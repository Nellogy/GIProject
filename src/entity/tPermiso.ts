import {Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne, Column} from "typeorm";

import {tRol} from "./tRol";

@Entity()
export class tPermiso {

    @PrimaryColumn()
    rolName : string;

    @PrimaryColumn()
    pantalla : string;

    @Column()
    acceso: boolean;

    @Column()
    modificacion: boolean;

    @ManyToOne(type => tRol, tRol => tRol.rolName)
    tPermiso: tPermiso;
}
