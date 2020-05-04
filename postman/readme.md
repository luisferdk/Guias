# Postman

## Verbos HTTP
_El protoco HTTP son una serie de reglas que especifican la comunicación._

_Significa 'Hyper Text Transfer Protocol'_

* `GET`: Solicitar datos o algún recurso.
* `HEAD`: Trae headers, como una petición GET pero sin contenido.
* `POST`: Envia datos a un recurso para la creación
* `PUT`: Remplaza por completo un recurso.
* `PATCH`: Actualizar una parte de un recurso.
* `DELETE`: Elimina un recurso

## HTTP Status Code
_Sirven para describir el estado de la petición hecha al servidor._

* `1xx`: Indica que la petición fue recibida y el servidor sigue trabajando en el proceso.
* `2xx`: Indica que la petición fue recibida y procesada correctamente.
* `3xx`: Hay que tomar acciones adicionales para completar la solicitud
* `4xx`: Errores del lado del cliente. Indica que la solicitud se hizo mal.
* `5xx`: Errores del lado del servidor.

- `200`: OK
- `201`: Post OK.
- `204`: Se proceso pero no devuelve nada (Se usa cuando se elimina un recurso).
- `400`: Bad Request se dejo de enviar algo, o hay algo malo con la solicitud.
- `401`: unauthorized. No tienes permisos.
- `403`: forbidden, no tengo acceso al recurso aunque este autenticado.
- `404`: not found, el recurso no existe
- `500`: No se puede procesar error del servidor

## Estructura de las URLS

**Recurso**: Es la representación de un objeto. Ejemplo Course.

**Colecciones**: Es un conjunto de recursos. Ejemplo Courses.

**CRUD**: Operaciones Básicas
	C: Create
	R: Read
	U: Update
	D: Delete
	
**Endpoints**:
Definen operaciones que se quieren ejecutar sobre un recurso. Ejemplo:  
- GET: /get-courses.

Para el uso de los endpoints es buena practica usar los verbos HTTP con la colecciones:
* GET: /courses Obtiene todos los cursos
* POST: /courses Agrega un curso
* DELETE: /courses Eliminar todos los cursos
* GET: /courses/2 Obtiene el curso con id 2

Recursos Anidados
* GET: materials/1/comments (2 Niveles)
* GET: materials/1/comments/2/answers (3 Niveles)

## Tipos de Cabeceras(headers)
_Las cabeceras es información que se envía en el request._

Contiene key and value
<table>
  <tr>
    <th>KEY</th>
    <th>VALUE</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

* `Authorization`: Contiene datos o tokens para autenticar al usuario en el servidor
* `Content-Type`: Contiene el tipo de datos que acepta ejemplo application/json

## Tipos de POST
* `form-data`: Para enviar archivos
* `raw | json`: Para enviar json
* `x-www-form-urlencoded`: Para enviar post por la url



## Documentar API en Postman
  **Guardar Request**
  1. Ejecuto el método
  2. Presionamos click en save response
  3. Aparece en examples

  **Method Description**
  1. Add description en el request
  2. Ingreso la descripción
    # This is the description for comments creation
    Request:
      - `content`: `String` especify the content of a comment
      - `material`: `Int` especify the material.
  3. Guardar

## Guardar Variables en Postman
  **Si la quiero guardar antes de enviar el request**
  1. Voy al request
  2. Pre-request script
  3. Escribo el siguiente código
    ```javascript
      pm.environment.set("name_var",value);
      postman.setEnvironmentVariable("name_var", value)

      //ejemplos:
      pm.environment.set("today",new Date().toISOString());
       postman.setEnvironmentVariable("today",new Date().toISOString());
     ```

  **Si la quiero guardar despues de enviar el request**
  1. Voy al request
  2. test
  3. escribo el siguiente código
    ```javascript
      var json = JSON.parse(responseBody);
      postman.setEnvironmentVariable("token",`Token ${json.token}`);
    ```

## Pruebas en los endpoints
  1. Voy al request
  2. Voy a test
  3. Escribo el código
    ```javascript
      // Comprueba que llegue un status 200
      pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
      });

      // Comprueba que sea de tipo JSON
      pm.test("JSON", function () {
          pm.response.json();   
      }); 


      pm.test("response token" , function() {
          pm.environment.unset("token");
        if(pm.response.to.have.jsonBody("access_token") && pm.response.to.have.jsonBody("token_type") ){
              var json = JSON.parse(responseBody)
              var token = `${json.token_type}${json.access_token}`;
              pm.environment.set("token",token);
        }    
      })
    ```
  
## Exportar Collection
  1. Voy a la collecction
  2. Presiono los 3 puntos
  3. Le damos guardar y listo

## Crear Documentación
  1. Voy a la Collection
  2. Presiono los 3 puntos
  3. Presiono Publish Docs
## API Curso
- /api-token-auth
- /courses
- /courses/:id/
- /courses/:id/upload_badge
- /materials
- /materials/:id/
- /materials/:id/comments/
- /comments/
- /comments/:id
- /comments/:id/like
- /comments/:id/dislike



Ejemplos:
Obtiene todos los cursos
- GET: /courses

Obtiene solo 1 curso
0 GET: /courses?limit=1

Obtiene solo 1 curso, carga la segunda página 
- GET: /courses?limit=1&page=2 

Obtiene solo 1 curso, carga la segunda página, ordena por ranking
- GET: /courses?limit=1&page=2&ordering=ranking 



Para obtener un token usamos la url /api-token-auth
y para acceder a urls que necesitan el token se envía en los header el token
Authorization con el Valor Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9