# Apex

Es una CMS creado por Oracle

## Apex Collections

Son variables de sesión que viven en la aplicación mientras este en la sesión

```sql
-- Para Crear la colleccion
Begin
  -- CREATE_COLLECTION Procedure
  APEX_COLLECTION.CREATE_COLLECTION(
    p_collection_name IN VARCHAR2);

  -- CREATE_OR_TRUNCATE_COLLECTION Procedure
  APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION(
    p_collection_name IN VARCHAR2);

  -- CREATE_COLLECTION_FROM_QUERY Procedure
  APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY (
    p_collection_name IN VARCHAR2,
    p_query IN VARCHAR2,
    p_generate_md5 IN VARCHAR2 default 'NO');

  -- CREATE_COLLECTION_FROM_QUERY2 Procedure
  APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2 (
    p_collection_name IN VARCHAR2,
    p_query IN VARCHAR2,
    p_generate_md5 IN VARCHAR2 default 'NO');
End;
```
