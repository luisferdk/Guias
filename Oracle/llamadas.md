# Llamadas

## pl_host
Este es un ejemplo de como se ejecuta un pl_host.
Lo que cambia es el comando.
La manera de ejecutar es con este proceso
`pack_unixutil.f_execute_command(comando)`
```sql
DECLARE
  comando     VARCHAR2(500);
  resultado   VARCHAR2(500);
  v_param1    VARCHAR2(10) := '2007';
  v_param2    VARCHAR2(10) := '11';
  v_param3    VARCHAR2(10) := '1';
  v_param4    VARCHAR2(10) := '1';
  v_param5    VARCHAR2(10) := '901';
  v_param6    VARCHAR2(10) := '24759';
BEGIN
  comando := 'aleactrb'
             || ' '
             || to_char(v_param1)
             || ' '
             || to_char(v_param2)
             || ' '
             || to_char(v_param3)
             || ' '
             || to_char(v_param4)
             || ' '
             || to_char(v_param5)
             || ' '
             || to_char(v_param6);

  comando := '/'
             || f_dabase_owner
             || '/cmd/'
             || comando;
  resultado := pack_unixutil.f_execute_command(comando);
  dbms_output.put_line(comando);
  -- Imprime /alead11g/cmd/aleactrb 2007 11 1 1 901 24759
  dbms_output.put_line(resultado);
  /* Report result: Execing: /usr/bin/sh-c/alead11g/cmd/aleactrb 2007 11 1 1 901 24759  ** 
  outputGobbler: Nothing to report. ;
  errorGobbler: Nothing to report. ;
  exit status: 1 */
  /* Si status es 0 o 1 esta bien
    Si status es 127 el comando no existe
  */
END;
```
