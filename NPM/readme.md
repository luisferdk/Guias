# NPM (Node Package Manager)
_Es un gestor de paquetes_

<p>
Lo que npm init hace, es inicializar tus proyectos para configurar tu aplicación y tu comunidad de desarrolladores entiendan que está pasando.
</p>

_Se recomienda la preconfiguración._
```bash
npm set init.author.email "correo"
npm set init.author.name "tu nombre"
npm set init.license "MIT"
```

_Se puede inicializar un proyecto rápido y con la preconfiguración se creará el package.json con estas:_
```bash
npm init -y
```
## Paquetes
_Los paquetes que necesito en el core del proyecto se instala con --save y los de desarrollo con --save-dev_

_Se crean 3 objetos_
* dependencies
* devDependencies
* optionalDependencies

## Comandos importantes
```bash
npm init
npm list -g --depth 0

npm install package //instala un paquete
npm i package // instala un paquete
npm i package@2.0 //instala un paquete con una versión específica

npm i package --save //instala un paquete y lo agrega a dependencies

npm i package --save-dev //instala un paquete y lo agrega a devDependencies
npm i package -D //instala un paquete y lo agrega a devDependencies

npm i package --force //instala un paquete forzosamente

npm outdate //Revisar que paquetes disponen de nuevas versiones
npm outdate --dd //Para ver el output más detallado

npm update //Actualizar los paquetes que no están en la ultima versión

npm i package@latest //Actualiza el paquete a su ultima versión

npm uninstall package //Eliminar un paquete de node_modules y del archivo package.json
npm uninstall package --no-save //Desinstalar un paquete de todo node_modules pero no del archivo package.json

npm cache clean --force //Limpiamos cache
npm cache verify //verifica si tiene cache

npm audit //permite auditar el proyecto
npm audit fix //Solucionar errores de seguridad
```

## Package lock y el uso los símbolos ^ y ~
* Caret(^)
* Tilde(~)
```json
{
  "webpack": "4.43.0", // Versión Exacta
  "webpack": "^4.43.0", // Versión actual o mayor
  "webpack": "~4.43.0", // Versión actual o aproximada
}
```


## Publicar Paquete
1. Creo una carpeta bin
2. Creo un archivo global.js y configuro lo que va hacer el paquete
3. Agrego esto al package.json
```json
{
  "bin": {
    "random-message": "./bin/global.js"
  },
  "preferGlobal": true
}
```

4. npm adduser
5. npm publish
6. npm version patch // Podemos usar (patch,minor,major,prepatch,preminor,premajor,prerelase)

*Nota:* _Si no se publica cambiar el nombre_