# Paquetes

## Crear specification de paquete

```sql
CREATE OR REPLACE PACKAGE PACK_APEX_PACKAGE AS
  -- Procesos
  PROCEDURE proceso_con_parametros (
    v_cedula     IN      empleados.cedula%TYPE,
    v_nombre   IN OUT  empleados.nombre%TYPE
  );

  PROCEDURE proceso_sin_parametro;

  -- Funciones
  FUNCTION function_con_parametros (
    v_cargo empleados.cargo%TYPE
  ) RETURN NUMBER;

  FUNCTION function_sin_parametros RETURN NUMBER;

END PACK_APEX_PACKAGE;
```

## Crear Body de paquete

```sql
CREATE OR REPLACE PACKAGE BODY PACK_APEX_PACKAGE AS
  -- Procesos
  PROCEDURE proceso_con_parametros (
    v_cedula     IN      empleados.cedula%TYPE,
    v_nombre   IN OUT  empleados.nombre%TYPE
  ) IS
  BEGIN
    SELECT nombre
    INTO v_nombre
    FROM empleados
    WHERE cedula = v_cedula;

    dbms_output.put_line('El nombre del empleado es: ' || v_nombre);
  EXCEPTION
    WHEN no_data_found THEN
      dbms_output.put_line('No existe el empleado');
  END;

  PROCEDURE proceso_sin_parametro IS
    v_aux VARCHAR2(3);
  BEGIN
    SELECT ''
    INTO v_aux
    FROM empleados;

    dbms_output.put_line('Si existen empleados');
  END;

  -- Funciones
  FUNCTION function_con_parametros (
    v_cargo empleados.cargo%TYPE
  ) RETURN NUMBER IS
    v_total NUMBER(10);
  BEGIN
    SELECT SUM(cargo)
    INTO v_total
    FROM empleados
    WHERE cargo = v_cargo;

    RETURN v_total;
  EXCEPTION
    WHEN no_data_found THEN
      RETURN 0;
  END;

  FUNCTION function_sin_parametros RETURN NUMBER IS
    v_total NUMBER(10);
  BEGIN
    SELECT SUM(cargo)
    INTO v_total
    FROM empleados;

    RETURN v_total;
  EXCEPTION
    WHEN no_data_found THEN
      RETURN 0;
  END;

END PACK_APEX_PACKAGE;
```

## Buscar Paquetes

```sql
-- Buscar si el paquete existe
  SELECT *
  FROM ALL_OBJECTS B
  WHERE B.OBJECT_TYPE IN ('PACKAGE','PACKAGE BODY', 'PROCEDURE', 'FUNCTION', 'SYNONYM')
    and UPPER(object_name) like UPPER('%f_pagocomision%');

-- Ver Código del Paquete
  SELECT text
  FROM all_source
  WHERE name = UPPER('F_PAGOCOMISION')
    AND type in ('FUNCTION');
```
