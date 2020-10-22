# Oracle

## PL SQL (Procedural Language/Structured Query Language)

### Bloque Anónimo
```sql
BEGIN
  dbms_output.put_line('Hola Mundo');
END;
```

### Declarar Variables
```sql
DECLARE
  mi_numero NUMBER(8) := 5;
BEGIN
  IF ( mi_numero > 10 ) THEN
    dbms_output.put_line('El número es mayor a 10');
  ELSE
    dbms_output.put_line('El número es menor a 10');
  END IF;
END;
```

### Ingresar Variables
```sql
DECLARE
  mi_numero NUMBER(5) := &numero;
BEGIN
  dbms_output.put_line('El valor introducido es ' || mi_numero);
END;
```

### Ciclos
#### While
```sql
DECLARE
  i NUMBER(8) := 1;
BEGIN
  WHILE ( i <= 10 )
  LOOP
    dbms_output.put_line(i);
    i := i + 1;
  END LOOP;
END;
```

#### For
```sql
BEGIN
  FOR i IN 1..10 LOOP
    dbms_output.put_line(i);
  END LOOP;
END;
```

#### Loop
```sql
DECLARE
  i NUMBER(8) := 1;
BEGIN
  LOOP
    EXIT WHEN i = 10;
    dbms_output.put_line(i);
    i := i + 1;
  END LOOP;
END;
```


### Select Into
  Guarda nombre en v_ename
```sql
DECLARE
  v_empno   eba_demo_da_emp.empno%TYPE := &codigo; -- 7782
  v_ename   eba_demo_da_emp.ename%TYPE;
BEGIN
  SELECT ename
  INTO v_ename
  FROM eba_demo_da_emp
  WHERE empno = v_empno;

  dbms_output.put_line('El nombre del empleado es: ' || v_ename);
END;
```

Obteniendo 2 variables <br>
nombre en v_nombre<br>
gama en v_gama
```sql
DECLARE
  v_empno   eba_demo_da_emp.empno%TYPE := &codigo; -- 7782
  v_ename   eba_demo_da_emp.ename%TYPE;
  v_job     eba_demo_da_emp.job%TYPE;
BEGIN
  SELECT ename,
         job
  INTO
    v_ename,
    v_job
  FROM eba_demo_da_emp
  WHERE empno = v_empno;

  dbms_output.put_line('El nombre del empleado es: ' || v_ename || ' y trabaja como: '||v_job);
END;
```

Obteniendo toda la fila en v_producto
```sql
DECLARE
  v_empno      eba_demo_da_emp.empno%TYPE := &codigo;
  v_empleado   eba_demo_da_emp%rowtype;
BEGIN
  SELECT *
  INTO v_empleado
  FROM eba_demo_da_emp
  WHERE empno = v_empno;

  dbms_output.put_line('El nombre del empleado es: '
                       || v_empleado.ename
                       || ' y trabaja como: '
                       || v_empleado.job);

END;
```


### Funciones y Procedimientos
**Función** (Devuelve algo) <br>
**Procedimiento** (No devuelve nada)

#### Función
```sql
CREATE OR REPLACE FUNCTION pagos_productos (
  v_cliente clientes.codigo%TYPE
) RETURN NUMBER AS
  v_total productos.precio%TYPE := 0;
BEGIN
  SELECT SUM(cantidad)
  INTO v_total
  FROM productos
  WHERE codigocliente = v_cliente;

  RETURN v_total;
END;
/

-- Llamando función
DECLARE
  v_cliente   clientes.codigocliente%TYPE := &codigo;
  v_total     pagos.cantidad%TYPE;
BEGIN
  v_total := pagos_productos(v_cliente);
  dbms_output.put_line('La suma de productos es ' || v_total);
END;
/
```


#### Proceso
```sql
CREATE OR REPLACE PROCEDURE total_pedido (
  v_codigopedido pedidos.codigopedido%TYPE
) AS
  v_total NUMBER(8) := 0;
BEGIN
  SELECT SUM(dp.cantidad * dp.preciounidad)
  INTO v_total
  FROM pedidos          p,
       detallepedidos   dp
  WHERE p.codigopedido = dp.codigopedido
        AND p.codigopedido = v_codigopedido;

  dbms_output.put_line('El pedido total es ' || v_total);
END;
/

-- Llamando proceso
DECLARE
  v_codigopedido pedidos.codigopedido%TYPE := &codigo;
BEGIN
  total_pedido(v_codigopedido);
END;
/
```


### Excepciones y Controladores
```sql
DECLARE
  v_total   eba_demo_da_emp.sal%TYPE;
  msg       VARCHAR2(100);
  err EXCEPTION;
BEGIN
  SELECT SUM(sal)
  INTO v_total
  FROM eba_demo_da_emp;

  IF v_total > 3000 THEN
    msg := 'Ha superado el límite salarial';
    RAISE err;
  END IF;
  dbms_output.put_line('El límite salarial esta bien');
EXCEPTION
  WHEN err THEN
    dbms_output.put_line(msg);
  WHEN no_data_found THEN
    dbms_output.put_line('No hay empleados');
END;
```




### Cursores
Con el loop
```sql
DECLARE
  v_nombre eba_demo_da_emp.ename%TYPE;
  CURSOR cursor1 IS
  SELECT ename
  FROM eba_demo_da_emp;

BEGIN
  OPEN cursor1;
  LOOP
    FETCH cursor1 INTO v_nombre;
    EXIT WHEN cursor1%notfound;
    dbms_output.put_line(v_nombre);
  END LOOP;
  CLOSE cursor1;
END;
```

Con el for
```sql
DECLARE
  CURSOR empleados IS
  SELECT ename
  FROM eba_demo_da_emp;

BEGIN
  FOR emp IN empleados LOOP
    dbms_output.put_line(emp.ename);
  END LOOP;
END;
```

### Métodos de Cursores
```sql
DECLARE
  CURSOR empleados IS
    SELECT ename
    FROM eba_demo_da_emp;
  emp empleados%rowtype;
BEGIN
  OPEN empleados;
    FETCH empleados INTO emp;
    
    IF empleados%notfound THEN
      dbms_output.put_line('Esta vacio');
    END IF;
    
    IF empleados%found THEN
      dbms_output.put_line('Esta lleno');
    END IF;  
  CLOSE empleados;
END;
```