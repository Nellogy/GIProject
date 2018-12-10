import {Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne, Column} from "typeorm";

import {tRol} from "./tRol";

@Entity()
export class tPermiso {

    @ManyToOne(type => tRol, tRol => tRol.rolName, {primary: true})
    rolName: tPermiso;

    @PrimaryColumn()
    pantalla : string;

    @Column()
    acceso: boolean;

    @Column()
    modificacion: boolean;
}
