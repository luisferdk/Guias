# Patrones de Diseño de Software

## Singleton

	Es un patrón que se usa para crear 1 instancia que muchos usuarios usen
	para que se cree una sola vez y así ahorrar memoria
	
	Ejemplo: Conexión a Base de Datos

## Fábrica/Factory
	Es un patrón que se usa para crear varias instancias pero para crear las diferentes
	instancias lo hago a través de la clase Fábrica
	
	Ejemplo: Conexión de Base de Datos a través de los diferentes gestores(Mysql, Oracle, Postgres)
	
	Tenemos una fábrica que es class conexión
	pero retornamos otra instancia según sea el caso la conexión a Mysql, Oracle o Postgres

## Fábrica Abstracta
	Es un patrón de una fábrica abstracta que ajunta varias fábrica y asigna la que se necesite
	
	Ejemplo: Fabrica Abstracta Gestor de Base de Datos o Api Rest.
	Gestor de Base de Datos puede ser (Mysql, Oracle, Postgres)
		Api Rest puede ser (Ventas, Compras, Usuarios)
	
	Entonces puedo crear una fábrica de Gestor con la Fábrica Abstracta y asignar el gestor despues
	O puedo crear una fábrica api rest y crear (Ventas,Compras)


## Prototype
	Es un patrón que busca obtener una instancia igual a una instancia previamente creada
	
	Ejemplo: Tengo 2 Cuenta con (Tipo, Monto)
		Cuenta 1: Tipo: Ahorro - Monto: 0
		Cuenta 2: Tipo: Ahorro - Monto: 200
		Clonamos la cuenta 2
		y obtenemos todo los datos de la cuenta 2


## Facade / Fachada
	Es un patrón estructural su objetivo es ocultar o simplificar la complejidad
	que tenga nuestra aplicación

	Ejemplo: La Fachada se usa como una libreria de manera que solo usemos los métodos sin tener que entender el código que conlleva realizar esa acción

## Decorator / Decorador
	Es un patrón que ofrece agregarle funcionalidad a un objeto existente sin necesidad de modificar su estructura.

	Ejemplo:
	Tengo una instancia que tiene nombre,Fecha de Nacimiento. Decoro esa instancia para darle la funcionalidad de que calculela edad.

## Proxy
	Es encapsular la complejidad en un emboltorio. Existe la Instancia Principal y una Instancia Proxy y a través del proxy acceda a la instancia Principal


## Command
	Es ejecutar metodos de una instancia a través de comandos.


## Memeto
	Promueve el guardado del estado en algún punto de la aplicación.
	
	Ejemplo: Check Point de un juego

## Estrategia
	Volver a ver

## Observador
	Falta ver

## Dao
	Es imprementar todos los metodos en una interfaz

## Inyección de Dependencias
	Es llamar a clases ya existentes y usarlas en nuestro proyecto

## MVC
	M = Modelo
	V = Vista
	C = Controlador