import {Entity, PrimaryColumn, PrimaryGeneratedColumn,OneToMany,JoinColumn, Column} from "typeorm";
import {tPiezas} from "./tPiezas";

@Entity()
export class tTipoPiezas {

    @PrimaryColumn()
    Id_tipo: number;

    @Column()
    Nombre: string;

    @OneToMany(type => tPiezas, tPiezas=>tPiezas.Id)
    tPiezass:tPiezas[];
}
