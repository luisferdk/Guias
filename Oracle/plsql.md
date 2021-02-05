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
  WHILE ( i <= 10 ) LOOP
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

Guarda nombre en v_nombre

```sql
DECLARE
  v_cedula   empleados.cedula%TYPE := &cedula; -- 1000
  v_nombre   empleados.nombre%TYPE;
BEGIN
  SELECT nombre
  INTO v_nombre
  FROM empleados
  WHERE cedula = v_cedula;

  dbms_output.put_line('El nombre del empleado es: ' || v_nombre);
END;
```

Obteniendo 2 variables <br>
nombre en v_nombre<br>
cargo en v_cargo

```sql
DECLARE
  v_cedula   empleados.cedula%TYPE := &cedula; -- 1000
  v_nombre   empleados.nombre%TYPE;
  v_cargo    empleados.cargo%TYPE;
BEGIN
  SELECT nombre,
         cargo
  INTO
    v_nombre,
    v_cargo
  FROM empleados
  WHERE cedula = v_cedula;

  dbms_output.put_line('El nombre del empleado es: '
                       || v_nombre
                       || ' y trabaja como: '
                       || v_cargo);
END;
```

Obteniendo toda la fila en v_empleado

```sql
DECLARE
  v_cedula     empleados.cedula%TYPE := &cedula;
  v_empleado   empleados%rowtype;
BEGIN
  SELECT *
  INTO v_empleado
  FROM empleados
  WHERE cedula = v_cedula;

  dbms_output.put_line('El nombre del empleado es: '
                       || v_empleado.nombre
                       || ' y trabaja como: '
                       || v_empleado.cargo);

END;
```

### Funciones y Procedimientos

**Función** (Devuelve algo) <br>
**Procedimiento** (No devuelve nada)

#### Función

```sql
CREATE OR REPLACE FUNCTION pago_cargo (
  v_cargo empleados.cargo%TYPE
) RETURN NUMBER AS
  v_total empleados.sueldo%TYPE := 0;
BEGIN
  SELECT SUM(sueldo)
  INTO v_total
  FROM empleados
  WHERE cargo = v_cargo;

  RETURN v_total;
END;
/

-- Llamando función
DECLARE
  v_total NUMBER(10);
BEGIN
  v_total := pago_cargo('Programador');
  dbms_output.put_line(v_total);
END;
/
```

#### Proceso

```sql
CREATE OR REPLACE PROCEDURE pago_programador (
  v_cedula empleados.cedula%TYPE
) AS
  v_total NUMBER(8) := 0;
BEGIN
  SELECT sueldo
  INTO v_total
  FROM empleados
  WHERE cedula = v_cedula;

  dbms_output.put_line('El programador gana: ' || v_total);
EXCEPTION
  WHEN no_data_found THEN
    dbms_output.put_line('No se encontro o no es programador');
END;
/

-- Llamando proceso
begin
  pago_programador('0666');
end;
/
```

### Excepciones y Controladores

```sql
DECLARE
  v_total   empleados.sueldo%TYPE;
  msg       VARCHAR2(100);
  err EXCEPTION;
BEGIN
  SELECT SUM(sueldo)
  INTO v_total
  FROM empleados;

  IF v_total > 10000 THEN
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
  v_nombre empleados.nombre%TYPE;
  CURSOR cursor1 IS
  SELECT nombre
  FROM empleados;

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
  SELECT nombre
  FROM empleados;

BEGIN
  FOR emp IN empleados LOOP
    dbms_output.put_line(emp.nombre);
  END LOOP;
END;
```

### Métodos de Cursores

```sql
DECLARE
   CURSOR c1
   IS
     SELECT ''
     FROM empleados;
  c1Row c1%rowtype;

  CURSOR c2
   IS
     SELECT ''
     FROM empleados
     where cedula = '-1';
  c2Row c2%rowtype;
BEGIN

   open c1;
   fetch c1 into c1Row;

   if c1%notfound then
      dbms_output.put_line('Cursor c1 Esta vacio');
   end if;

   if c1%found then
      dbms_output.put_line('Cursor c1 Esta lleno');
   end if;

   close c1;


   open c2;
   fetch c2 into c2Row;

   if c2%notfound then
      dbms_output.put_line('Cursor c2 Esta vacio');
   end if;

   if c2%found then
      dbms_output.put_line('Cursor c2 Esta lleno');
   end if;

   close c2;
END;
```

## Formatear Fecha
```sql
DECLARE
  v_fecha DATE := TO_DATE('31/12/20', 'dd/mm/yy');
BEGIN
  dbms_output.put_line(v_fecha);
  dbms_output.put_line(to_char(v_fecha,'dd/mm/yyyy'));
  dbms_output.put_line(to_char(v_fecha,'dd-mm-yyyy'));
END;
```


## SYS_REFCURSOR
### Con Procso
```sql
CREATE OR REPLACE PROCEDURE obtener_empleados_procedure (
  v_cargo            IN    empleados.cargo%TYPE,
  cursor_empleados   OUT   SYS_REFCURSOR
) AS
BEGIN
  OPEN cursor_empleados FOR SELECT cedula,
                                   nombre,
                                   sueldo
                            FROM empleados
                            WHERE cargo = v_cargo
                            ORDER BY cedula;

END obtener_empleados_procedure;
/

DECLARE
  l_cursor   SYS_REFCURSOR;
  v_cedula   empleados.cedula%TYPE;
  v_nombre   empleados.nombre%TYPE;
  v_sueldo   empleados.sueldo%TYPE;
BEGIN
  obtener_empleados_procedure(v_cargo => 'Backend', cursor_empleados => l_cursor);
  LOOP
    FETCH l_cursor INTO
      v_cedula,
      v_nombre,
      v_sueldo;
    EXIT WHEN l_cursor%notfound;
    dbms_output.put_line(v_cedula
                         || ' | '
                         || v_nombre
                         || ' | '
                         || v_sueldo);

  END LOOP;

  CLOSE l_cursor;
END;
/
```


### Con Function
```sql
CREATE OR REPLACE FUNCTION obtener_empleados_function (
  v_cargo IN empleados.cargo%TYPE
) RETURN SYS_REFCURSOR AS
  cursor_empleados SYS_REFCURSOR;
BEGIN
  OPEN cursor_empleados FOR SELECT cedula,
                                   nombre,
                                   cargo,
                                   sueldo
                            FROM empleados
                            WHERE cargo = v_cargo;

  RETURN cursor_empleados;
END;
/

DECLARE
  cursor_empleados   SYS_REFCURSOR;
  cedula             empleados.cedula%TYPE;
  nombre             empleados.nombre%TYPE;
  cargo              empleados.cargo%TYPE;
  sueldo             empleados.sueldo%TYPE;
BEGIN
   -- get the ref cursor from function
  cursor_empleados := obtener_empleados_function('Backend'); 
   
   -- process each employee
  LOOP
    FETCH cursor_empleados INTO
      cedula,
      nombre,
      cargo,
      sueldo;
    EXIT WHEN cursor_empleados%notfound;
    dbms_output.put_line(cedula
                         || ' '
                         || nombre
                         || ' - '
                         || cargo
                         || ' - '
                         || sueldo);

  END LOOP;
   -- close the cursor

  CLOSE cursor_empleados;
END;
/
```

### Split
```sql
DECLARE
  CURSOR lista IS
  SELECT regexp_substr('A1,A2,A4', '[^,]+', 1, level) item
  FROM dual CONNECT BY
    regexp_substr('A1,A2,A4', '[^,]+', 1, level) IS NOT NULL;

  listarow lista%rowtype;
BEGIN
  OPEN lista;
  -- Item 1
  FETCH lista INTO listarow;
  dbms_output.put_line(listarow.item);

  -- Item 2
  FETCH lista INTO listarow;
  dbms_output.put_line(listarow.item);
  CLOSE lista;
END;
```