# Webpack 
_Es un empaquetador para Javascript y sus amigos. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden._

_Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros._

## User Experience
  _Se logra con una aplicación que:_

  * Funcione
  * Sea rápida
  * Cumpla sus necesidades
  * Se actualice
  * Responda a sus interacciones
  * Producto de calidad

## Developer Experience
  * Escribir aplicaciones de manera eficiente.
  * Tener un código limpio.
  * Aplicar tecnología para resolver sus problemas.
  * Tener un conjunto de reglas y convenciones.
  * Entorno de desarrollo optimizado en productividad.


## CLI Webpack
_Comando Básico_
*Nota:* `npx webpack` corre el paquete instalado en nuestro proyecto (No el Global)

```bash
npx webpack --mode=development --entry ./src/index.js --output ./src/bundle.js
```

## Loaders
  - css-loader //Entiende css en js
  - style-loader //Agrega el css en el head del html

## Plugins
  - MiniCSSExtractPlugin //Extrae el css en 1 archivo
  - HtmlWebpackPlugin //Crea un archivo html con los css y js automáticamente


## Code Splitting
```json
{
  optimization:{
    splitChunks:{
      chunks:'all',
      minSize: 0,
      name:'commons'
    }
  }
}
```
## Dynamic Link Library
<p>
Mientras más librerías agregamos más lento se empiezan a volver nuestros builds, arruinando así la Developer Experience. Por suerte podemos crear una (o varias) Dynamic Link Library para acortar estos tiempos.
</p>

<p>
Una Dynamic Link Library (DLL) es un conjunto de librerías comunes que no cambian frecuentemente por lo que se hace un build por adelantado de las mismas para no re-empaquetar cada vez que hacemos build de nuestra aplicación.
</p>

<p>
Beneficiando tanto la Developer Experience como la User Experience ya que el caché del navegador va a mantener una copia que solo va a cambiar cuando nosotros agreguemos o quitemos alguna dependencia, ahorrando así valiosos requests al servidor.
</p>