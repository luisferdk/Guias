# Interactive Grid

## Agrega SQL Query

```sql
  select * from empleados;
```


## Cambiar Opciones

- Ir Attributes
- Buscar JavaScript Initialization Code

```js
function( options ) {
  // Aqui inicializamos los initActions
  options.initActions = function( actions ) {
      // Aqui modificamos el número de filas por página
      actions.set("change-rows-per-page",1000000);
  };
  return options;
}

```

Para hacerlo desde javascript se usa así

```js
apex.region('reporte').call('getActions').set('change-rows-per-page', 10);
```

`Nota:` Para usar:

*apex.region('reporte')*

*$('#reporte')*

Agregar en el reporte un static ID

## Ejecutar Código después de actualizar reporte

```js
apex
  .region('reporte')
  .widget()
  .on('gridpagechange', function (e, ui) {
    // Codigo después de actualizar
  });
```


## Obtener filas seleccionadas
```js
$('#reporte').on('interactivegridselectionchange', function (event, data) {
  //Imprime seleccionados
  console.log(data.selectedRecords);
});
```
