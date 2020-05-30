# Javascript


## Variables

```js
let numero = 2; // entero o int
let frase = 'Hello World'; // cadena o string
let sexo = 'S'; // caracter o char
let promedio = 24.6; // real o float
let activado = true; // booleano o boolean
let frutas = ['manzana', 'pera', 'piña']; // vector o array
let matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let cosas = [2, 'Manzana', true, { nombre: 'luis' }];
let persona = {
  nombre: 'Luis',
  apellido: 'Fernandez',
  mensaje: function () {
    console.log('Soy Programador');
  },
}; // objeto o object
```

## Tipos de Declaraciones

```js
const pi = 3.1416;
let nombre = 'Luis'; // local
var apellido = 'Fernandez'; //global
```

## Tipos de Condiciones

```js
let m = 2;
if (m == 2) {
} //igual
if (m < 2) {
} //menor
if (m > 2) {
} //mayor
if (m != 2) {
} //diferente
if (m % 2 == 0) {
} //módulo
if (m == 3.1416) {
}
if (m > 1 && m < 10) {
} // condicion (Y)
if (m > 1 || m < 10) {
} // Condicion (O)

/*-----Condicionales-----*/
let n = 1;
if (n == 1) {
  // dentro de los () va la condición
  //codigo
}

if (n == 1) {
  //codigo
} else {
  //codigo
}

if (n == 1) {
  //codigo
} else if (n == 2) {
  //codigo
} else {
  //codigo
}

let opcion = 1;
switch (opcion) {
  case 1:
    //codigo
    break;

  case 2:
    //codigo
    break;

  case 3:
    //codigo
    break;

  default:
    //codigo
    break;
}
```

## Ciclos

```js
let i = 0,
  n = 10;
//for
for (let i = 0; i < n; i++) {
  //codigo
}

do {
  //codigo
} while (i == 4);

while (i == 4) {
  //codigo
}
```

## Funciones

```js
function nombreFuncionVacia() {
  //codigo
}

function nombreFuncionRetorna() {
  // codigo
  return n;
}

function nombreFuncionVaciaConParametros(nombre, apellido) {
  // codigo
  console.log(nombre);
  console.log(apellido);
}

function nombreFunctionRetornaConParametros(num1, num2) {
  // codigo
  return num1 + num2;
}

function nombreFunctionRetornaConParametrosPordefecto(num1 = 1, num2 = 2) {
  // codigo
  return num1 + num2;
}
```

## Funciones Nuevas

```js
var nombreFuncionVacia = () => {
  //codigo
};

var nombreFuncionRetorna = () => console.log('hola'); // si es 1 sola linea

var nombreFuncionRetorna2 = () => {
  return console.log('hola');
};
```

## Clases y Herencia

```js
{
  // ES5
  // Clase
  function Document(title, author, isPublished) {
    this.title = title;
    this.author = author;
    this.isPublished = isPublished;
  }

  Document.prototype.publish = function () {
    this.isPublished = true;
  };

  //Herencia
  function Book(title, author, topic) {
    Document.call(this, title, author, true);
    this.topic = topic;
  }
  Book.prototype = Object.create(Document.prototype);
}

{
  //ES6
  // Clase
  class Document {
    constructor(title, author, isPublished) {
      this.title = title;
      this.author = author;
      this.isPublished = isPublished;
    }

    publish() {
      this.isPublished = true;
    }
  }

  // Herencia
  class Book extends Document {
    constructor(title, author, topic) {
      super(title, author, true);
      this.topic = topic;
    }
  }
}
```

## Spread Operator

```js
let frutas1 = ['Manzana', 'Pera'];
let frutas2 = ['Mora', 'Fresa'];
let frutas3 = ['Mango'];
let frutas = ['Guayana', ...frutas1, ...frutas2, ...frutas3, 'Melon'];
```

## Destructuring

```js
// array
let a, b;
[a, b] = [1, 2];

let foo = () => [175, 175];
let [width, height] = foo();

//object
let user = {
  name: 'Luis',
  surname: 'Fernández',
};

let { name, username } = user;

//Podemos combinar destructuring con el spread operator
let x, y, iterables;

[x, y, ...iterables] = [1, 2, 3, 4, 5, 6];
// x=1; y=2; iterables=[3,4,5,6];
```

## Template Literas

```js
let name = 'Luis';
let surname = 'Fernandez';
console.log(`Nombre:${name} Apellido:${surname}`);
```

## For ..of loop

```js
let numbers = [1, 2, 3, 4, 5];

//ES5
numbers.forEach(function (value) {
  console.log(value);
});

//ES6
for (let value of numbers) {
  console.log(value);
}

let iterable = [3, 5, 7];
iterable.foo = 'Hello';

for (let i in iterable) {
  console.log(i);
}
//  0,1,2,foo

for (let i of iterable) {
  console.log(i);
}
// 3,5,7
```

## Methods Array

```js
let users = [
  {
    id: 4,
    name: 'luis',
    surname: 'Fernández',
    age: 26,
  },
  {
    id: 6,
    name: 'Sidney',
    surname: 'Garcia',
    age: 26,
  },
  {
    id: 8,
    name: 'Alejandro',
    surname: 'Garcia',
    age: 16,
  },
];
//return index
let index = users.findIndex((user) => user.id == 1); // return posicion 1

//return value
let user = users.find((user) => user.name == 'luis'); // return object with name luis

// return array
let usersAge26 = users.filter((user) => user.age == 26);
```

## Generadores

```js
function* idMaker() {
  let index = 0;
  while (index < 3) yield index++;
  yield 'end';
}
let gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

## Maps y Sets

```js
{
let map = new Map();
map.set('foo', 123);

    let user = {
      userId: 1
    };
    map.set(user, 'Luis');

    map.get('foo'); //123
    map.get(user); //luis
    map.size; //2
    map.has('foo'); //true
    map.delete('foo'); //true
    map.has('foo'); //false
    map.clear();
    map.size; // 0


    //Weak Map is equal but only accept object how keys
    let key1 = {
      id: 1
    };
    let key2 = {
      id: 2
    }
    let weakMap = new WeakMap();
    weakMap.set(key1, 'Alex');
    weakMap.set(key2, 'Alex');

}

{
let map new Map(
[
['user1', 'Alex'],
['user2', 'Vicky'],
['user3', 'Enrique']
]
);
for (let [key, value] of map) {
console.log(key, value);
}
map.keys(); // iterator with key
map.values(); //iterator with values
map.entries(); //iterator with pair [key,value]
}

{
// key and value are equals
// only save values uniques
let set = new Set();
set.add('foo');
set.add('bar');
set.size; // 2

    for (let item of set) {
      console.log(item);
    }

    set.has('foo'); //true
    set.delete('foo'); //true
    set.has('foo'); //false
    set.size; //1
    set.clear();
    set.size; //0
    //['foo','foo']
    //['bar','bar']


    //Weak Set is equal but only accept object how keys
    let key1 = {
      id: 1
    };
    let key2 = {
      id: 2
    }
    let weakSet = new WeakSet();
    weakSet.add(key1);
    weakSet.add(key2);

}
```

## Módulos

```js
//ES5
// export.js
function nombreFunctionExportar() {
  console.log('hola');
}

// Case 1
module.exports = nombreFunctionExportar; //export only function
// Case 2
module.exports = {
  //export object with myfunction
  nombreFunctionExportar,
};

// import.js
// Case 1
const newFunction = require('./export'); // import function
// Case 2
const object = require('./export'); // import object
object.nombreFunctionExportar();
```

## DOM

```js
/* Obtener elemento del DOM  */
const h1 = document.querySelector('h1');

/* Añadir Clases a Elemento*/
h1.classList.add('clase1'); // forma 1
document.querySelector('h1').classList.add('clase2');

/* Quitando Clase a Elemento */
h1.classList.remove('clase3'); // forma 1
document.querySelector('h1').classList.remove('clase4');

/* Saber si tiene clase específica */
console.log(h1.classList.contains('clase1'));
console.log(document.querySelector('h1').classList.contains('clase4'));

/* Cambiar Texto de un elemento */
setTimeout(function () {
  document.querySelector('h1').innerHTML = 'Soy el nuevo texto';
}, 2000);

/* Agregar Evento */
h1.addEventListener('click', function () {
  alert('Presionaste Click Sobre el h1');
});

/* Agregar Eventos a un Vector de Elementos */
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (evento) {
    alert(i);
  });
}
```