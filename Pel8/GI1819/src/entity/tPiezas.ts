import {Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";

import {tTipoPieza} from "./tTipoPieza";

@Entity()
export class tPiezas{

  @PrimaryGeneratedColumn()
  ID : number;

  @Column()
  NOMBRE : string;

  @Column()
  FABRICANTE : string;

  @Column()
  ID_TIPO :  string;

  @ManyToOne(type => tTipoPieza, tTipoPieza => tTipoPieza.ID_TIPO)
  TPiezas: tPiezas;
}
