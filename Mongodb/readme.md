# Tabla de orientacion para entrar al mundo de MongoDB
SQL o Relacional  | MongoDB
------------- | -------------
Base de Datos  | Base de Datos
Tabla  | Collection / Coleccion
"Registro" / Row  | Document / Documento
Join  | Lookup
Foreign Key  | Reference / Referencia
 Multi-table transaction  | Single Document Transaction
 
# Comandos para la terminal

	$:mongod (Inicializa MongoDB)
	$:mongo (abre el Shell para trabajar con MongoDB)


## Comandos de MonoDB

Crear una Colecion ( Una BD )
	
	 mongo NombreDeLaBaseDeDatos
show dbsVid
Para mostrar todas las Base de Datos
	
	 show dbs

Para seleccionar la Base de Datos con la que deseamos trabajar

	 use NombreDeLaBaseDeDatos
	 
Para saber la cantidad de documentos que contiene la coleccion

    db.NombreDeLaBaseDeDatos.count()
	
### Ejemplo
	
	 use ejemplo	

# Insert

Para insertar datos en MongoDB se utiliza una estructura de tipo JSON como podras ver a continuacion:

#### Estructura

    var variable = { 
        "nombre" : "Eric", "apellido" : "Avila", "edad" : "27"  
        }
    
> Nota : Una manera que en lo personal me gusto es la de declarar una variable que contenga la `consulta`(por decirlo de alguna manera) y despues agregarla al `metodo` al cual usaremos.

#### Una vez guardada, la ingresamos en el `"metodo"`. 

> Recuerda que estamos utilizando la Base de Datos llamada : **`ejemplo`**
 
    db.ejemplo.insert( variable );

#### En caso de que no exista el ´Documento´se creara automaticamente.

#### Ejecutamos el metodo
    db.ejemplo.find()
>> Y obtendremos los `"Registros"` antes insertados.

## Insert multiple
    
    db.ejemplo.insert( [
        { nombre : "Alina", apellido : "Avila", edad : 2 } ,
        { nombre : "Mariana", apellido : "Villanueva", edad : 27 } ,
        { nombre : "Ramses", apellido : "Barrios", edad : 14 }
    ] )
>La caracteristica de agregar multiples objetos JSON o registros es agregar **´[ ]´** (Corchetes) para indicar que es un **Array** de datos.


# Update

Para actualizar datos en MongoDB hay que tener ciertas consideraciones que se muestran a continuacion.

#### Estructura

>db.ejemplo.update( 
>   **`{ "nombre" : "Eric" }`** , { "apellido" : "Avila", "edad" : "50"  }  )

>> ### Siempre ten en cuenta que al momento de hacer la consulta de esta forma, tienes que poner todos sus campos, ya que si no lo haces se _actualizara_ con las propiedades que solo hayas puesto en la sentencia.
>>> Para evitar eso existe lo siguiente 

#### Estructura

db.ejemplo.update( { "nombre" : "Eric" }, { **`$set :   { "TipoDeSanGre" : "A+" }`**  } , { **_upsert : true_** }  )
>La funcion **`$set`** sirve para agregar una propiedad mas a nuestra `carpeta` o `registro`

>>> Tranquilo enseguida sabras porque se agrega **`upsert`**.


Hay una `"configuracion"`dentro de la estructura del **`Update`** que nos da la siguientes prestaciones.
     
### -> upsert : true / true

var variable = { "nombre" : "Eric", "apellido" : "Avila", "edad" : "27"  } ,  **`{ upsert : true }`**

> Con esta caracteristica activada **true** hace que si el `Documento`no existe se creá y si existe lo actualiza. Si agregamos el estado de la variable a **false** hace lo contrario
>>En otras palabras si no lo encuentra no hace nada.
    
> Nota : **Recuerda que con esa consulta solo actualiza la primera coincidencia**

### -> multi : true / true

var variable = { "nombre" : "Eric", "apellido" : "Avila", "edad" : "27"  } ,  **`{ multi : true }`**

> Con esta caracteristica activada **true** especificamos que queremos `actualizar multiples documentos` por default esta se cuentra en **false**. Aunque no lo agreguemos en nuestra sentencia siempre estara en ese estado a menos que lo cambiemos, obviamente.

### Si desearamos eliminar un `campo` de nuestro `documento` se haria de la siguiente forma

>db.products.update( { _id: ObjectId("51e6681a2b7e6dab80c1ebd6") }, { **`$unset:{ "edad" : "1" }`** } )
>>¿Por que se pone 1?, sucede que el 1 funje como `true` siendo esta funcion un `boleano`


### Incrementar un valor **`$inc`**
>Supongamos que por alguna razon tenemos nos equivocamos en una cantidad y ocupamos que sea mas de lo que pusimos en la propiedad, para este tipo de casos se utiliza lo siguiente:

>db.products.update( { _id: ObjectId("51e6681a2b7e6dab80c1ebd6") } , { **`$inc:{ "edad" : 10 }`** } )
>
>>Que es lo que sucede, toma el valor actual de la propiedad `edad`y le aumenta la cantidad de 10 al valor actual.

## Save 

**`.save`** realiza la misma funcion que el **`update`** con **_upsert_**. Esto quiere decir que si **NO EXISTE EL DOCUMENTO** lo va a crear ó si existe lo actualizara.

### Estructura

>db.ejemplo.save( **`_id: ObjectId("50691737d386d8fadbd6b01d")`** , { "apellido" : "Avila", "edad" : "12"  }  )


# **`Recomiendo actualizar utilizando como parametro el _id_ ya que con esto tenemos mas control y asi evitaremos errores.`**

# Find / FindOne

Estos metodos son utilizados para buscar `documentos` en la base de datos, claro ambas son para casos especificamos como te muestro a continuacion.

## Find

### Estructura

###### Este comando te muestra los `documentos` que contiene la coleccion que seleccionamos. (Muestra los primeros 20 resultados que encuentre por default)

	db.NombreDeLaColeccion.find()

### Ejemplo	

	db.ejemplo.find()
	
##### Ese resultado se puede guardar en una variebla para luego consultar por medio de una posicion que queramos obtener ( Imagina un Array con los datos y un Indice para utilizarlo para el contenido de la posicion )

	 var nombreDeLaVariable = db.NombreDeLaColeccion.find()

### Ejemplo
	 var array = db.ejemplo.find()
	
Para imprimir el Indice al cual queremos acceder utilizando la variable anterior haras lo siguiente:
	
	 printjson ( array [ 4 ] )
	
>>Donde **`array`** es la variable que utilizamos para guardar el resultado de la consulta y el numero dentro de los corchetes es el Indice al cual queremos acceder.
	 
	 
##  TIP !!!

###### Este comando imprime el contenido de una Carpeta en formato JSON
	$: db.NombreDeLaColeccion.pretty()

### Ejemplo con el comando `.find()`
	$: db.ejemplo.find().pretty()
	
**Esto nos ayudara a leer los resultados de una mejor manera el contenido de un documento o dentro de una base de datos.**

## FindOne 

#### Estructura

    db.ejemplo.findOne()

Este comando te muestra un documento al azar ya que no le agreamos ningun `argumento` para especificar la busqueda.

### Ejemplo `.find( con argumentos )`

    db.ejempli.findOne( { "_id": "ObjectId("50691737d386d8fadbd6b01d")" } )

>>En este ejemplo le agreamos los argumentos para hacer la busqueda de un `_id` especificamente y es lo que vamos a obtener, solo ese.

En caso de que querramos buscar varios documentos que tengan **una coincidencia** dependiendo del argumento que le pasemos al metodo se haria de la siguente manera

### Ejemplo

    db.ejemplo.find( { "nombre" : "Eric" } )

>>Asi retornara todo los "Usuarios" llamados **Eric**
>>>Hasta aqui siempre nos muestra todos los campos que contiene el documento, pero que tal si no queremos que nos muetre todo, que tal si solo queremos saber ciertas cosas, para este tipo de casos haremos lo siguiente.


>>>**db.ejemplo.find( { "nombre" : "Eric" } , `"apellido" : true , "edad" : false`  } )**
>>>
>>>De esta manera nos retornara todas las personas que tengan el nombre de **`Eric`** y el campo **`apellido`**
ya que es el unico que tiene el estado **`true`**.

# Remove

Este comando hace lo que dice, eliminar el documento que especifiquemos.

>**Recuerda tener cuidado ya que si no especificas el `documento` en la consulta, eliminaras todo.**

### Ejemplo

    db.ejemplo.remove( { "_id": "ObjectId("50691737d386d8fadbd6b01d")" } )

# Operadodes 
>(Actualizare a medida que entienda un poco mas y sea lo suficiente claro para explicarlo)

## Ejemplo de problema para poder entender algunos operadores.

>Supongamos que tenemos una base de datos de un Hospital y que en este Hospital tiene la necesidad de saber que pacientes son aptos para ser operados ya que es necesario revisar los examenes de sus analisis para pasarlos a Cirugia o regresarlos hasta que cumplan los requisitos

*"Se que es raro pero creeme que entenderas mejor los operadores así".*

### Manejaremos la siguiente estructura JSON para un paciente
    
    { 
        _id: ObjectId("51e6681a2b7e6dab80c1ebd6") ,
         nombrePaciente : "Jose Jose" , 
         edadPaciente : 50 ,
         fechaIngreso : [
                           { dia : "Lunes" } ,
                           { mes : "Abril" },
                           { año : 2018 }
                        ] ,
        alergias : ["penicilina","diclofenaco","polen"] ,
        aptoCirugia : "No" ,
        triguiceridos : 200 ,
        azucar : 150 ,
        cirugiasAnteriores : "Si"

    }
    
>Recuerda que es un ejemplo y que tenemos una Base de datos llamada **Hospital**.

### Caso 1 - El uso de **`$eq`**
>**( Equal )** Evalua si un campo es **igual** al valor que hayas escrito.

##### -> *Supongamos que quisieramos saber los pacientes que tengan una edad especifica*

    db.hospital.find( { edadPaciente : { $eq : 18 } } )
    
### Caso 2 - El uso de **`$gt`** y **`$lte`**
>**( Greater than )** Evalua si un campo es **mayor** al valor que hayas escrito y **( Lesser than or equal )** Evalua si un campo es **menor o igual** al valor que hayas escrito

##### -> *Supongamos que quisieramos saber los pacientes que son mayores de edad (18 años) hasta los 30 años*

    db.hospital.find( { edadPaciente : { $eq : 18 , $lte : 30 } } )

### Caso 3 - El uso de **`$or`** y **`$lt`**
>**( Ó )** este operar se utiliza en caso de que puede suceder una cosa ú otra y **( Lesser than  )** Evalua si un campo es **menor** al valor que hayas escrito

##### -> *Supongamos que quisieramos saber los pacientes que son menores de 50 años ó que hayan tenido cirugias anteriores *

    db.hospital.find( { $or: [ { edad: { $lt: 50 } }, { cirugiasAnteriores: "Si" } ] } )


#### Operadores Basicos

Operadores  | Funcion
------------- | -------------
$eq  | (Equal) 
$gt  | (Greater than) 
$gte | (Greater than or equal) 
$lt | (Lesser than) 
$lte | (Lesser than or equal) 
$ne | (Not equal) 
$or | (O)
$and | (Y)
<!--
$exists | {exists: true} evalúa si existe(no es nulo).
$in | Evalúa si el valor se encuentra dentro del array.
$nin | (Not in) Evalúa si el valor no se encuentra dentro del array.
$all | Evalúa si todos los valores se encuentran dentro del array.
$mod | (Modulo) Aplica la operación de módulo y lo compara con el valor pasado.
$regex | Selecciona los documentos que casan con el valor de la expresión regular.
$$text | Realiza una busqueda de texto.
$where| Casa con los documentos que satisfagan una expresión en JavaScript.
-->

# Ordernar `Documentos` en la `Coleccion`
>Hemos utilizado el comando `.pretty()` al final de las consultas para que nos muestra una forma mas legible los `registros` ahora que pasaria si quisieramos order los datos dentro de la `Coleccion` para este tipo de casos se utiliza el comando **`.sort()`**


##### -> *Siguiendo con el ejemplo del Hospital se nos ordena que organizemos alfabeticamente a todos los pacientes*

    db.hospital.find().sort( { nombrePaciente : 1 } )
    
>>El valor de **1** significa que ordenara de manera ascendente y caso contrario se utilizara **-1**

# Usos de **.count()**
Como habiamos visto en el inicio este metodo nos sirve para contar, para mostrar su utilidad utilizaremos el ejemplo del Hospital

##### -> *Supongamos que queremos saber cuantos paciente ingresaron durante el año 2018*

    db.hostpital.find( "fechaIngreso.año" : 2018 ).count()

# ¿Como acceder a los datos que estan dentro de un `registro`? 

Como te pudiste dar cuenta en la sentencia anterior consultamos la cantidad de personas que fueron ingresadas durante el año 2018, pero ese dato no se encuentra en el "primer nivel" de nuestro formato JSON que contiene los datos del paciente, entonces ¿ como accedimos a el ?.

### Estructura JSON de paciente
    { 
        _id: ObjectId("51e6681a2b7e6dab80c1ebd6") ,
         nombrePaciente : "Jose Jose" , 
         edadPaciente : 50 ,
         fechaIngreso : [
                           { dia : "Lunes" } ,
                           { mes : "Abril" },
                           { año : 2018 }
                        ] ,
        alergias : ["penicilina","diclofenaco","polen"] ,
        aptoCirugia : "No" ,
        triguiceridos : 200 ,
        azucar : 150 ,
        cirugiasAnteriores : "Si"

    }

> *A estas alturas te habras dado cuenta que MongoDB trabaja con la estructura de datos JSON y aunque no lo creas tambien estas utilizando JavaScript, de hecho es dicen los que saben que es mejor aprender JavaScript y despues MongoDB, yo diria y ¿por que no ambos?.*

#### Regresando al tema analicemos los "`niveles`" que tenemos en nuestra estructura de paciente

    fechaIngreso : [
                           { dia : "Lunes" } ,
                           { mes : "Abril" },
                           { año : 2018 }
                        ] 
>Observemos que una de las propiedades de nuestro Paciente fue la fecha de ingreso al hospial y en esta se tiene otras propiedades dentro para hacer mas especifico en como se maneja la fecha de ingreso.

### Accedamos a los valores de fechaIngreso

##### -> *Supongamos que queremos saber el dia en el que el paciente ingreso, lo cual lo hariamos de la siguiente manera*

    db.hostpital.find( {"_id" : ObjectId("5a9bc2f7ae61711fa665c462")} , {"fechaIngreso.dia" : true } ).pretty()

>Como puedes observar solo te muestra el `dia` en el cual fue ingresado el pasciente, recuerda que para solo mostrar un dato agregaremos la `propiedad` que queremos obtener con un estado `true` ( Esto ya se vio con anterioridad ).

>Ó ahora bien, si quieres ver todos los pacientes que entraron el dia Lunes seria así.

    db.hostpital.find({ "fechaIngreso.dia" : "Lunes" }).pretty()

>Excelente ahora podemos ser mas especificas nuestras busquedas.

## Arrays

Array imaginalo como un contener que puede tener en su interior `n` datos, los cuales estan organizados por algo llamado `indice`.

    alergias : ["penicilina","diclofenaco","polen"]

>En el caso de la seccion de alergias observemos que no tiene mas propiedades si no, se puede entender como un `array` llamado `alergias` las cuales contiene **3 Espacios** utilizados. 
>
>En un `array` se inicia el conteo desde **`0`** (Cero), esto quiere decir que el **`Indice`** para acesar a alguno de los elementos del `array` seria algo como [0] = penicilina , [1] = diclofenaco, [2] = polen.

### Accedamos a los valores de alergias

##### -> *Supongamos que queremos saber las alergias del paciente, para un caso asi, esta seria la solucion*

    db.hostpital.find( {"_id" : ObjectId("5a9bb274ae61711fa665c45f")} , { alergias : true } ).

### Los Arrays y sus operadores

Operadores  | Funcion
------------- | -------------
$elemMatch  | asd 
$slice  | asd
$.  | asd 
$size | asd


##### -> *Pero, y si solo queremos saber la primera alergia del paciente*

    db.hostpital.find( {"_id" : ObjectId("5a9bb274ae61711fa665c45f")} , { alergias : { $slice : 1 } } )

>Nos muestra todo el `documento` del Paciente y en la parte donde se encuentran las alergias solo nos muestra la primera. **`Ten en cuenta que dependiendo del numero que pongamos es la cantidad de elementos que nos mostrara, empezadon de Izquierda a Derececha o en si lo vemos de manera mas Tecnica del INDICE [0] en adelante`** 
