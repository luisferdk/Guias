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