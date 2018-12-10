import {Entity, PrimaryColumn, PrimaryGeneratedColumn,OneToMany,JoinColumn, Column} from "typeorm";
import {tPiezas} from "./tPiezas";

@Entity()
export class tTipoPiezas {

    @PrimaryColumn("varchar", {length: 4})
    id_tipo: string;

    @Column()
    nombre: string;

    @OneToMany(type => tPiezas, tPiezas=>tPiezas.idTipo)
    tPiezas:tPiezas[];
}
