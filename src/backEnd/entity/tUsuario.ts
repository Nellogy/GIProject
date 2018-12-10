import {Entity, PrimaryColumn, ManyToOne, Column} from "typeorm";

import {tRol} from "./tRol";
@Entity()
export class tUsuario {

    @PrimaryColumn()
    nombre: string;

    @Column()
    password : string;

    @ManyToOne(type => tRol, tRol => tRol.rolName)
    rolName: tUsuario;
}
