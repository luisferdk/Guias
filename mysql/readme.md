mysql -h nombre_servidor -u nombre_usuario -p
mysql -h localhost -u root -p
use mibasedatos;
show databases;
show tables;

//Importar
mysql -u usuario -pcontraseña nombre-base-de-datos < fichero-importacion.sql

//Exportar
mysqldump -u usuario -pcontraseña nombre-base-de-datos > fichero-exportacion.sql