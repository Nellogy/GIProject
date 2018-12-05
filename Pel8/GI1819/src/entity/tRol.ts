import {Entity, PrimaryColumn, OneToMany,Column} from "typeorm";
import {tUsuario} from "./tUsuario";
import {tPermiso} from "./tPermiso";

@Entity()
export class tRol {

  @PrimaryColumn()
  rolName : string;

  @Column()
  rolDes : string;

  @Column()
  admin : boolean;

  @OneToMany(type => tUsuario, tUsuario=>tUsuario.rolName)
  tUsuarios:tUsuario[];

  @OneToMany(type => tPermiso, tPermiso=>tPermiso.rolName)
  tPermisos:tPermiso[];
}
