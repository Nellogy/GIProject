import {Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne, Column} from "typeorm";

import {tRol} from "./tRol";
@Entity()
export class tUsuario {

    @PrimaryColumn()
    nombre : string;

    @Column()
    password : string;

    @Column()
    rolName: string;

    @ManyToOne(type => tRol, tRol => tRol.rolName)
    tUsuario: tUsuario;
}
