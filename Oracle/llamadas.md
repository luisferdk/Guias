# Llamadas

## pl_host
Este es un ejemplo de como se ejecuta un pl_host.
Lo que cambia es el comando.
La manera de ejecutar es con este proceso
`pack_unixutil.f_execute_command(comando)`
```sql
declare
  COMANDO     varchar2(500);
  RESULTADO   varchar2(500);
  V_PARAM1    varchar2(10) := '2007';
  V_PARAM2    varchar2(10) := '11';
  V_PARAM3    varchar2(10) := '1';
  V_PARAM4    varchar2(10) := '1';
  V_PARAM5    varchar2(10) := '901';
  V_PARAM6    varchar2(10) := '24759';
begin
  COMANDO := 'aleactrb'
             || ' '
             || TO_CHAR(V_PARAM1)
             || ' '
             || TO_CHAR(V_PARAM2)
             || ' '
             || TO_CHAR(V_PARAM3)
             || ' '
             || TO_CHAR(V_PARAM4)
             || ' '
             || TO_CHAR(V_PARAM5)
             || ' '
             || TO_CHAR(V_PARAM6);

  COMANDO := '/'
             || F_DABASE_OWNER
             || '/cmd/'
             || COMANDO;
  RESULTADO := PACK_UNIXUTIL.F_EXECUTE_COMMAND(COMANDO);
  DBMS_OUTPUT.PUT_LINE(COMANDO);
  -- Imprime /alead11g/cmd/aleactrb 2007 11 1 1 901 24759
  DBMS_OUTPUT.PUT_LINE(RESULTADO);
  /* Report result: Execing: /usr/bin/sh-c/alead11g/cmd/aleactrb 2007 11 1 1 901 24759  ** 
  outputGobbler: Nothing to report. ;
  errorGobbler: Nothing to report. ;
  exit status: 1 */
  /* Si status es 0 o 1 esta bien
    Si status es 127 el comando no existe
  */
end;
```

## pl_audit
Se usa para insertar en la bitácora de procesos
```sql
PACK_APEX_ALEA1.PL_AUDIT('80',TO_CHAR(V_UNI), TO_CHAR(V_ANNO), TO_CHAR(V_NMORDCHE),'','',''); 
```

## pl_val
Se usa para cargar las descripciones
```sql
PACK_APEX_ALEA1.PL_VAL('TPERPAG', TO_CHAR(:P312_CDPERPAG), :P312_DSPERPAG, 'VNS');
```
