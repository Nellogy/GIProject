
INSERT INTO t_Rol VALUES('administrador', 'administrador',1);
INSERT INTO t_Rol VALUES('usuario', 'usuario',0);
INSERT INTO t_Rol VALUES('invitado', 'invitado',0);
 


INSERT INTO t_Usuario (nombre, password, rolNameRolName) VALUES('admin', 'admin','administrador');
INSERT INTO t_Usuario (nombre, password, rolNameRolName) VALUES('user', 'user','usuario');
INSERT INTO t_Usuario (nombre, password, rolNameRolName) VALUES('inv', 'inv','invitado');
 



INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('administrador','LOGIN',1,1);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('administrador','MATERIAS',1,1);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('administrador','LIBROS',1,1);

INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('usuario','LOGIN',1,1);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('usuario','MATERIAS',1,0);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('usuario','LIBROS',1,0);

INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('invitado','LOGIN',1,1);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('invitado','MATERIAS',0,0);
INSERT INTO t_Permiso (rolNameRolName, pantalla, acceso, modificacion) VALUES('invitado','LIBROS',0,0);

 

 

INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('A','Chapa');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('B','Motor');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('C','Iluminacion');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('D','Sensores');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('E','Cristales');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('F','Pintura');
INSERT INTO t_Tipo_Piezas (Id_tipo, Nombre) VALUES('G','Otros');


 

INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('PARAGOLPES DELANTERO NEGRO-LISO A IMPRIMAR','MAZDA','A');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('PARAGOLPES TRASERO-IMPRIMADO','MAZDA','A');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('REJILLA NEGRA','MAZDA','A');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('ALETA DELANTERA DCH CON AUJERO PARA PILOTO CX3 16','MAZDA','A');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('ALETA DELANTERA IZQ CON AUJERO PARA PILOTO CX3 16','MAZDA','A');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas luz delantera','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas señalizacion delantera','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas luz trasera','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas señalizacion trasera','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Estuches de bombillas','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Iluminacion LED','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas interior','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Bombillas Xenon','RENAULT','C');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Juntas y otras piezas del motor','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Alimentacion','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Kits de distribucion','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Correas','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Poleas','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Kits','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Valvulas EGR','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Herramienta especifica','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Turbocompresores','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Sensores electronicos y medidores de flujo','FORD','B');
INSERT INTO t_Piezas(NOMBRE,FABRICANTE,idTipoIdTipo) VALUES('Cable de acelerador y starter','FORD','B');
 