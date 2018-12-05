import {Entity, PrimaryColumn, OneToMany,Column} from "typeorm";
import {tPiezas} from "./tPiezas";

@Entity()
export class tTipoPieza {

  @PrimaryColumn()
  ID_TIPO : number;

  @Column()
  NOMBRE : string;

  @OneToMany(type => tPiezas, tPiezas => tPiezas.ID)
  TPiezass : tPiezas[];
}
