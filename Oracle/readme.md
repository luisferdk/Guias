# Oracle

## PL SQL (Procedural Language/Structured Query Language)

### Bloque Anónimo
```sql
begin
  DBMS_OUTPUT.PUT_LINE('Hola Mundo');
end;
```

### Declarar Variables
```sql
declare
  mi_numero number(8) := 5;
begin
  if(mi_numero > 10) then
    DBMS_OUTPUT.PUT_LINE('El número es mayor a 10');
  else
    DBMS_OUTPUT.PUT_LINE('El número es menor a 10');
  end if;
end;
```

### Ingresar Variables
```sql
declare
  mi_numero := &numero;
begin
  DBMS_OUTPUT.PUT_LINE('El valor introducido es ' || mi_numero);
end;
```

### Ciclos
#### While
```sql
declare
  i number(8) :=1;
begin
  while(i<=10)
  loop
    DBMS_OUTPUT.PUT_LINE(i);
    i := i+1; 
  end loop;
end;
```

#### For
```sql
begin
  for i in 1..10
  loop
    DBMS_OUTPUT.PUT_LINE(i);
  end loop;
end;
```

#### Loop
```sql
declare
  i number(8) :=1;
begin
  loop
    exit when i=10;
    DBMS_OUTPUT.PUT_LINE(i);
    i := i+1;
  end loop;
end;
```


### Select Into
  Guarda nombre en v_nombre
```sql
declare
  v_codigo productos.codigo%type := &codigo;
  v_nombre productos.nombre%type;
begin
  select nombre into v_nombre
  from productos
  where codigo = v_codigo;

  DBMS_OUTPUT.PUT_LINE('El nombre del producto es: ' || v_nombre);
end;
```

Obteniendo 2 variables <br>
nombre en v_nombre<br>
gama en v_gama
```sql
declare
  v_codigo productos.codigo%type := &codigo;
  v_nombre productos.nombre%type;
  v_gama productos.gama%type;
begin
  select nombre, gama into v_nombre, v_gama
  from productos
  where codigo = v_codigo;

  DBMS_OUTPUT.PUT_LINE('El nombre del productos es: ' || v_nombrecliente || 'y su gama es' || v_gama);
end;
```

Obteniendo toda la fila en v_producto
```sql
declare
  v_codigo productos.codigo%type := &codigo;
  v_producto productos%rowtype;
begin
  select * into v_producto
  from productos 
  where codigo = v_codigo;

  DBMS_OUTPUT.PUT_LINE('El nombre del productos es: ' || v_producto.nombre || 'y su gama es' || v_producto.gama);
end;
```


### Funciones y Procedimientos
**Función** (Devuelve algo) <br>
**Procedimiento** (No devuelve nada)

#### Función
```sql
create or replace function pagos_productos(v_cliente clientes.codigo%type)
return Number
as
  v_total productos.precio%type := 0;
begin
  
  select sum(cantidad) into v_total
  from productos
  where codigocliente = v_cliente;

  return v_total;

end;
/

-- Llamando función
declare
  v_cliente clientes.codigocliente%type := &codigo;
  v_total pagos.cantidad%type;
begin
  v_total := pagos_productos(v_cliente);
  DBMS_OUTPUT.PUT_LINE('La suma de productos es ' || v_total);
end;
/
```


#### Proceso
```sql
create or replace procedure total_pedido(v_codigopedido pedidos.codigopedido%type)
as
  v_total number(8) := 0;
begin
  
  select sum(dp.cantidad * dp.PRECIOUNIDAD) into v_total
  from pedidos p, detallepedidos dp
  where p.codigopedido = dp.codigopedido and p.codigopedido = v_codigopedido;

  DBMS_OUTPUT.PUT_LINE('El pedido total es ' || v_total);

end;
/

-- Llamando proceso
declare
  v_codigopedido pedidos.codigopedido%type := &codigo;
begin
  total_pedido(v_codigopedido);
  
end;
/
```


### Excepciones y Controladores
```sql
declare
  limite_superado exception;
  codigo productos.codigo%type := &codigo;
  limite productos.precio%type := &limite;
  v_total productos.precio%type;
begin
  select sum(precio) into v_total from productos;
  if v_total is null then
  else
    if v_total > limite then
      raise limite_superado;
    else
      DBMS_OUTPUT.PUT_LINE('El total es ' || v_total);
    end if;
  end if;
end;
```
```sql
declare
  v_codigo productos.codigo%type := &codigo;
  v_nombre productos.nombre%type;
begin
  select nombre into v_nombre
  from productos
  where codigo = v_codigo;

  DBMS_OUTPUT.PUT_LINE('El nombre del producto es: ' || v_nombre);
  -- Ojo aquí creo la excepción
  exception when no_data_found then
    DBMS_OUTPUT.PUT_LINE('El producto no existe');
end;
```




### Cursores
Con el loop
```sql
declare
  v_nombre nelumbo.eba_demo_da_emp.ename%type;
  cursor cursor1 is
  select ename
  from nelumbo.eba_demo_da_emp;
begin
  open cursor1;
  loop
    fetch cursor1 into v_nombre;
    exit when cursor1%notfound;

    DBMS_OUTPUT.PUT_LINE(v_nombre);
  end loop;
  close cursor1;
end;
```

Con el for
```sql
declare
  cursor clientes_sin_pagos is
  select nombrecliente
  from clientes;
begin
  for registro in clientes_sin_pagos loop
  DBMS_OUTPUT.PUT_LINE(registro.nombre);
  end loop;
end;
```