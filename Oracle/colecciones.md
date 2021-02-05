# Colecciones

```sql
BEGIN
  -- consulta
  SELECT
    seq_id AS ID,
    c001   AS columna_001,
    c002   AS columna_002,
    c003   AS columna_003,
    c004   AS columna_004,
    c005   AS columna_005,
    c006   AS columna_006,
    c007   AS columna_007,
    c008   AS columna_008,
    c009   AS columna_009,
    c010   AS columna_010,
    c011   AS columna_011,
    c012   AS columna_012,
    c013   AS columna_013,
    c014   AS columna_014
  FROM apex_collections
  WHERE collection_name = 'EMPlEADOS';

  -- Existe
  apex_collection.collection_exists('EMPLEADOS');
  
  -- Crear Colección
  apex_collection.create_collection(
    p_collection_name => 'EMPLEADOS'
  );
  
  -- Crear Colección o la vacia
  apex_collection.create_or_truncate_collection(
    p_collection_name => 'EMPLEADOS'
  );

  -- Crear Colección a partir de una consulta
  apex_collection.create_collection_from_query(
    p_collection_name => 'EMPLEADOS',
    p_query => 'select * from empleados',
    p_generate_md5 => 'NO' -- NO/YES
  );

  -- Actualizar todas las columnas
  -- Ojo las que no coloca las pone vacia
  apex_collection.add_member(
    p_collection_name => 'EMPLEADOS',
    p_c001 => 'COLUMN 1',
    p_c002 => 'COLUMNA 2'
  );

  -- Actualizar atributo
  DECLARE
    seq NUMBER(3);
  BEGIN
    SELECT
        seq_id
      INTO seq
      FROM
        apex_collections
      WHERE
        collection_name = 'EMPLEADOS'
        AND cedula = '123';
        
    apex_collection.update_member_attribute (
      p_collection_name => 'EMPLEADOS',
      p_seq => seq,
      p_attr_number => c001,
      p_attr_value => 'Valor'
    );
  END;

  -- Eliminar
  apex_collection.delete_member(
    p_collection_name => 'EMPLEADOS',
    p_seq => 1
  );
END;   
``` 