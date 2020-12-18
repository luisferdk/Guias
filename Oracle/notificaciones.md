# Notificaciones

## Desde Procesos PL/SQL

```sql
-- Exitoso
apex_application.g_print_success_message := 'Siniestro Anulado';

-- Error de Pagina
apex_error.add_error(
  msg, p_display_location => apex_error.c_inline_in_notification);

-- Error Item y Pagina
apex_error.add_error(
  p_message => 'Error',
  p_display_location => apex_error.c_inline_with_field_and_notif,
  p_page_item_name => 'P5_CUSTOMER_ID');

-- Error Item
apex_error.add_error(
  p_message => 'Error',
  p_display_location => apex_error.c_inline_with_field,
  p_page_item_name => 'P5_CUSTOMER_ID');
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
