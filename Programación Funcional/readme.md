# Programación Funcional

#### 1.) Funciona Puras
funciones que si se les envian los mismos parametros siempre devuelve el mismo resultado

```javascript
function suma(num1, num2){
    return num1 + num2;
}

suma(2,3) //return 5
suma(5,7) //return 12
suma(2,3) //Vuelve a retornar 5
```

#### 2.) Composición de Funciones

Son funciones que usan otras funciones para hacer operaciones.
```javascript
function suma(num1, num2){
    return num1 + num2;
}

function alCuadrado(num){
    return num * num;
}

function sumaDeCuadrados(num1, num2){
    return suma(alCuadrado(num1),alCuadrado(num2));
}
```


#### 3.) Funciones Recursivas

Son funciones que se llaman así mismas

```javascript
function sum(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}

sum(4); // return 4+3+2+1+0 = 10
```

#### 4.) Funciones de Alto Orden
Son funciones que reciben funciones como parámetros.

```javascript

function masGrandeQue(n) {
  return (m) => m > n;
}

const masGrandeQue10 = masGrandeQue(10);
const masGrandeQue20 = masGrandeQue(20);

console.log(masGrandeQue10(12)); //true
console.log(masGrandeQue20(12)); //false
```

 