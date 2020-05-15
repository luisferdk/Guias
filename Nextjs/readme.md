# Next JS

_Nextjs es una framework de SSR basado en Reactjs_

### Instalación 🔧

1. Necesitas instalar los siguientes paquetes

```bash
npm i next react react-dom
```
2. Luego en el proyecto creamos una carpeta pages

3. Para crear las páginas simplemente creo un archivos js exportando el component

4. Creamos los scripts en package.json
```json
{
  scripts:{
    "dev":"next",
    "build":"next build",
    "start":"next start"
  }
}
```

### Notas
  - No se necesita importar react en los archivos