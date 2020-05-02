# Guide Express

### Que es Express?

<p>
Express es un framework de nodejs para crear apps del lado del servidor y poder escribir nuestro servidor con este modulo (Express) y podemos escribir apps MVC este framework acepta varios paradigmas
- Ir a la pagina de expressjs.com en api reference nos aparece que es lo que hace cada parte de express, los metodos, los enrutadores. Nos sirve de recordatorio</p>

#### Instalación

1- creamos el package.json (describe nuestro proyecto) | npm init -y
2- instalamos express en este proyecto

`npm install express`

```javascript
const express = require('express');
const app = express();

app.listen(3000, () =>
  console.log('Running Server port http://localhost:3000')
);
```

`npm i nodemon -D`

### Express Routing y METODOS HTTP

  <p>Enrutamiento o las rutas no es mas que una ruta que cuando ingresen a ella por un metodo HTTP va a ejecutar el callback</p>
  1- creamos la ruta /api/tasks | app.get("/api/tasks", callback)

2- asi podemos crear multiples ruta para nuestra aplicacion atravez del metodo get
RUTAS CON METODOS POST, PUT, DELETE, asi cuando el navegador me mande una peticion con esos metodos hacemos algo puede ser guardar datos en una base de datos, eliminar o actualizar etc.

```javascript
app.get('/api/tasks', callback);
app.post('/api/tasks', callback);
app.put('/api/tasks', callback);
app.delete('/api/tasks', callback);
```

Para probar esas rutas lo haremos con POSTMAN

### Middlewares

<p>
Un Middleware es un manejador de peticion, y se ejecuta antes que lleguen a cualquier ruta. Para procesar algo antes de llegar a la ruta
</p>

- Creamos una funcion llamada logger recibe por parametro (req, res, next) y que muestra un console.log() y un next()
- Para usar el Middleware se llaman asi | app.use(logger)
- cuando vamos a la ruta /user o cualquier otra se ejecuta el Middleware
  En el Middleware podemos que a que ruta va a ir el usuario, en el server | `Ruta recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`
- req.protocol me retorna el protocolo de la peticion
- req.get('host') me retorna el servidor de la peticion
- req.originalUrl me retorna la ruta que me esta pidiendo
  Instalaremos morgan es un manejador de peticion y se ejecuta antes que lleguen a cualquier ruta
- npm i morgan
- Lo importo a mi proyecto | const morgan = require("morgan")
- Uso el Middleware y lo llamo con un formato| app.use(morgan("dev")) //usa el Middleware
  Ya en consola veo una peticion de tipo get la ruta el codigo de estado de la peticion, el tiempo de respuesta y el peso de la respuesta

### Static Files Middleware

  <p>
    Un Middleware que nos permite enviar archivos estaticos al frontend un html que puede tener css, javacript enlazados al html y los archivos se pueden ver en el navegador ejemplo http://localhost:3000/css/main.css me muestra el css de ese archivo
  </p>

- app.use(express.static("public")) | Usa el Middleware static que viene dentro de express y le paso el nombre de la carpeta.
- Dentro de la carpeta creamos un index.html con un h1
- y si vamos al navegador y nos vamos a / vemos el html | valida todas las rutas y si no esta esa ruta / retorna el html

#### Settings y Motor de plantillas EJS

<p>
Para configurar el puerto, si vamos a usar un motor de plantillas, el nombre de la app, conclusion configurar el servidor
app.set("appName", "WillyExpress") | CONFIGURACION Vamos a verlo como una variable que recibe parametros 1-Nombre 2-valor y para obtener la configuracion con app.get("port") /me retorna 3000
app.set("port", 3000) | CONFIGURACION del puerto | para obtener la configuracion app.get("port") /me retorna 3000
Motor de plantillas EJS | nos permite correr js dentro de html
</p>

- npm install ejs | instalamos el modulo, con solo instalarlo no hace falta importarlo para usarlo con express
- app.set("view engine", "ejs") | voy a establecer como motor de plantillas de mi app a ejs
- creo una carpeta llamada views y dentro un index.ejs que es un html
- para mostrarlo en la ruta / | res.render("index.ejs", {personas: data}) | le estoy pasando a la vista un objeto con un atributo people que es un arreglo
- para usar sintaxis javacript dentro de una plantilla EJS usamos <%%> <%%> y para iterar el arreglo que le pasamos a la vista podemos hacer algo asi:
  <ul>
  <% people.forEach( (persona) => { %>
  <li><%= persona.name %></li>
  <% }) %>
  </ul>

### Bases de datos

<p>
  Nosotros definimos que base de datos integrar y se hace con un modulo de npm
  Tambien existen ORM que nos evitan escribir consultas del DBMS (Sistema de gestión de bases de datos) solo escribimos funciones JS y este ejecuta la consulta en la base de datos</p>

- sequelizejs es un ORM para bases de datos SQL, nos permite hacer consultas a la DBMS sin necesidad de escribir la sintaxis de la base de datos especificamente solo que se hace a travez de funciones JS, ASI que si luego cambiamos la base de datos el codigo seguira funcionando

- mongoose es un ORM para bases de datos NOSQL
