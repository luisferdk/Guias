# Consulta de Interes

## Consulta convertir string en array
Esta consulta se usa para convertir un string separado por comas(',')
en un array con el fin de usar where in
```sql
DECLARE
  v_lista VARCHAR2(100) := '1,2,3';
  CURSOR empleados IS
  SELECT *
  FROM (
    SELECT t.*,
           ROWNUM AS id
    FROM (
      SELECT *
      FROM empleados
    ) t
  )
  WHERE id IN (
    SELECT regexp_substr(v_lista, '[^,]+', 1, level)
    FROM dual CONNECT BY
      regexp_substr(v_lista, '[^,]+', 1, level) IS NOT NULL
  );

BEGIN
  dbms_output.put_line('Empleados Seleccionados');
  FOR item IN empleados LOOP
    dbms_output.put_line(item.nombre);
  END LOOP;
END;
```