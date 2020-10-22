# SQL = Structured Query Language
Sirve
  - mostrar / buscar
  - insertar
  - editar
  - eliminar
  
en una base de datos

## select / mostrar
```sql
select columnas from tabla;
-- Si quiero todas uso *
-- Si quiero 2 uso , ejemplo: cedula, nombre
Ejemplo:
  select * from empleados;
  select cedula, cargo from empleados;
```


## select para buscar
```sql
select columnas from tabla where condicion;

Ejemplo:
  select * from empleados where cargo = 'Programador';
  -- si es diferente se usa !=
  -- si es > se usa >
  -- si es < se usa <
  -- select con like

  select * from empleados where cedula like '%23%';
  -- 23% busca todo lo que empiece en 23 y el resto no importa
  -- %23 busca todo lo que termine en 23 y el resto no importa
  -- %23% busca un 23 en todo
```



## Insert / Insertar
```sql

insert into tabla values(valor1, valor2);
insert into tabla(column1, column2) values(valor1, valor2);

-- Ejemplo
insert into empleados(NOMBRE, CARGO, CEDULA) values('Hilda','Profesora','9332165');
insert into empleados values('9232566','Marco','Periodista');
```



## Update / Editar
```sql
update tabla set column1 = valor1;
-- Actualiza todas las filas de esa columna
update tabla set column1 = valor1 where condicion;
-- Actualiza las filas que cumplan la condición

-- Ejemplo
update empleados set cargo = 'Developer';
update empleados set cargo = 'Developer' where cargo = 'Programador';
update empleados set sueldo = 2000 where cargo = 'Developer' or cargo = 'Diseñadora' ;
```




## Delete / Eliminar
```sql
delete from tabla where condicion;

-- Ejemplo
delete from empleados where cedula = '9232566';
```

## Commit
Para guardar los cambios al final colocar
```sql
commit;
```

## Rollback
Para retroceder los cambios colocar
```sql
rollback;
```