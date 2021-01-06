# Notificaciones

## Desde Procesos PL/SQL

```sql
-- Exitoso
APEX_APPLICATION.G_PRINT_SUCCESS_MESSAGE := 'Siniestro Anulado';

-- Error de Pagina
APEX_ERROR.ADD_ERROR(MSG, P_DISPLAY_LOCATION => APEX_ERROR.C_INLINE_IN_NOTIFICATION);

-- Error Item y Pagina
APEX_ERROR.ADD_ERROR(P_MESSAGE => 'Error',
  P_DISPLAY_LOCATION => APEX_ERROR.C_INLINE_WITH_FIELD_AND_NOTIF,
  P_PAGE_ITEM_NAME => 'P5_CUSTOMER_ID');

-- Error Item
APEX_ERROR.ADD_ERROR(P_MESSAGE => 'Error',
  P_DISPLAY_LOCATION => APEX_ERROR.C_INLINE_WITH_FIELD,
  P_PAGE_ITEM_NAME => 'P5_CUSTOMER_ID');
```

## Desde Acciones Dinámicas con Javascript

```js
// Mostrar Errores
apex.message.showErrors([
  {
    // Mostrar Error en Página e Item
    type: apex.message.TYPE.ERROR,
    location: ['page', 'inline'],
    pageItem: 'P1_CAMPO',
    message: 'This field is required',
    unsafe: false,
  },
  // Mostrar Error en Página
  {
    type: apex.message.TYPE.ERROR,
    location: ['page'],
    message: 'Page level error',
    unsafe: false,
  },
  // Mostrar Error en Item
  {
    type: apex.message.TYPE.ERROR,
    location: ['inline'],
    pageItem: 'P1_CAMPO',
    message: 'This field is required',
    unsafe: false,
  },
]);

// Limpiar Errores
apex.message.clearErrors();

// Mensaje Exitoso
apex.message.showPageSuccess('Proceso Completado');

// Errores con multiples items
let error = 0;
let vector = ['P1_CAMPO1', 'P1_CAMPO2', 'P1_CAMPO3', 'P1_CAMPO4', 'P1_CAMPO5'];

for (let i in vector) {
  if ($v(vector[i]).length == 0) {
    apex.message.showErrors([
      {
        type: apex.message.TYPE.ERROR,
        location: ['inline'],
        pageItem: vector[i],
        message: 'Value is required!',
        unsafe: false,
      },
    ]);
    error = 1;
  }
}

if (error == 0) {
  /* Acción Dinámica cuando no hay error */
  apex.event.trigger(document, 'customDA', [{ customAttribute: '1' }]);
}


//Detener acciones dinámicas
apex.da.cancelEvent.call(this);
```
