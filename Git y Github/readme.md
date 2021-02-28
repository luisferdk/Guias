# Git

## Guias

- [Git y Github](guia.pdf)
- [Como escribir un Commit](commit.pdf)

## Configuración

_Lista de Comando para configurar git_

```bash
git --version
git config --global user.name "luisferdk"
git config --global user.email "luisdk.03@gmail.com"
git config --global color.ui true
git config --global --list
git config --global alias.a 'add -A'
git config --global alias.m 'commit -m'
git config --global alias.am 'commit -am'
git config --global alias.s 'status'
git config --global alias.l 'log --oneline'
git config --global alias.ps 'push origin main'
git config --global alias.pl 'pull origin main'
git config --global alias.psr 'push origin'
git config --global alias.plr 'pull origin'
git config --global alias.nicelog 'log --oneline --graph --all'
```

## Inicializando Proyecto

_Ojo: Primero debo crear mi repositorio en github_

### Comandos

```bash
git init #Inicia proyecto
git log --oneline #para ver los commits
git log --oneline --graph --all #para ver graficamente las ramas
git add . #Agrega todo
git status #Visualiza el status
```

```bash
git clone (repositorio) #Sirve para clonar un proyecto
git commit -m "mensaje" #Guarda un commit
git commit -am "mensaje" #Es la union de git add -A y git commit -m "mensaje"
git checkout (commit) #Se ubica en un commit que yo desee sin eliminar los demas
git checkout main #(main en este caso)
git commit --amend #para hacer cambios en la descripcion de algun commit
```

```bash
git stash #Guarda los cambios en memoria
git stash list #Muestra la lista de los cambios quese han guardado
git stash pop #Muestra los cambios
git stash branch [rama] #Lleva los cambios a una nueva rama
git stash drop #Borra los cambios guardados en stash
```

```bash

git rm --cached nombre_archivo #Dejar de seguir archivo (Se mantiene en el historial)

git rm -r --cached nombre_directorio #Dejar de seguir directorio (Se mantiene en el historial)

git filter-branch -f --index-filter "git rm -rf --cached --ignore-unmatch nombre_archivo"
#(Elimina archivo del historial y del disco duro)

git clean --dry-run #Para saber qué archivos vamos a borrar tecleamos

git clean -f #Para borrar todos los archivos listados (que no son carpetas) tecleamos
```

```bash
git reset --soft (commit) #para ir a un commit pero no elimina nada del código

git reset --mixed (commit) #para ir a un commit pero elimina de la zona intermedia

git reset --hard (commit) #para ir a un commit pero elimina todo(usar con cuidado)
```

```bash
git help ayuda
git help status ayuda de uso de status
```

### Comandos Remotos

```bash
git remote add origin (repositorio en github)
git remote -v #Para ver el repositorio remoto
git remote remove origin #elimina la conexion con el repositorio remoto
```

```bash
#OJO estos tres comandos se usan mucho cuando se trabaja de manera grupal y en tiempo real

git push origin main #para envia los cambios al repositorio remoto (en este caso main pero puede ser cualquier otra rama)

git fetch origin #(baja los cambios del repositorio remoto a la rama oculta origin/main)

git merge origin/main #(fusiona la rama donde estoy con la rama oculta origin/main)
```

## Ramas

```bash
git branch #Muestra las ramas
git branch -a #Muestra las ramas ocultas
git branch -D (rama) #Elimina la rama local
git push origin --delete (rama) #Elimina la rama remota
git checkout -b (nueva rama) #Crea la rama y se ubica en ella
```

### Fusión de Ramas

//Me ubico en la rama que deseo agregar la otra rama

```bash
git checkout main
git merge (rama que deseo absorver)
```

//en la funsión me pueden dar 2 mensajes

Fast-Forward o Manual Merge
(automática) (cuando se trabaja en equipo y
se hacen cambios en la misma linea de un código)

Cuando hay errores al subir mi repositorio local al remoto con el comando push hago esto:

```bash
git fetch origin
git merge origin/main

git pull origin main #(es la union de git fetch y git merge)
```

y luego arreglamos el conflicto en la linea de comandos me dice donde esta el error
HEAD es el ultimo commit local
origin/main es el cambio que descargue

### Tags

_Sirve para versionar nuestro proyecto hasta x commit_

```bash
git tag -a v0.8 -m "mensaje" #para agregar tag al ultimo commit donde estoy
```

```bash
git tag -a v0.7 -m "mensaje" #(commit que deseo asignar el tag)
git push origin v0.8 #para el tag subir al repositorio remoto
git push origin --tags #para subir todos los tags
```

## Issues, Milestones, Labels

### Issues:

_Son una forma de decir que le falta al proyecto(respositorio)_

### Milestones:

_Son grupos de issues y se usa para colocar tareas dentro de un grupo y se le puede colocar fecha límite_

### Labels:

_Son etiquetas que le podemos agregar a los issues_

Nota: esto es buenisimo para trabajar de manera grupal todo
esto se hace por la página de github y es muy util.

## Workflows

_Son flujos de trabajos y se puede usar con proyectos propio o de terceros_

## Crear sitios web

creamos un repositorio en github que se llame: nombre.github.io

```bash
git clone (direccion)
git branch gh-pages
```

guardamos gh-pages nuestra pagina web
ingresamos al navegador luisferdk.github.io/nombre_del_repositorio

## Hooks

Se usan para ejecutar una serie de comandos despues de ejecutar otro

ejemplo:
despues de un git commit -m "mensaje"
me ejecute automáticamente
el git push origin main
otros comandos

para hacerlo me dirijo hacia la carpeta .git/hooks
creo un archivo ejemplo:
touch post-commit
nano post-commit o vim post-commit //para cerrar vim presiono Esc :q
#!/bin/sh //reconozca comandos
git push origin main

## Clave SSH

Introduzco en la consola de git

```
ssh-keygen
```

me genera la contraseña
luego voy a la carpeta .ssh/
copio en contenido que tiene id_rsa.pub usando el comando cat para verlo
me dirijo a github y guardo la contraseña en settings/ key-ssh

## gitignore

para evitar subir archivos no deseados al repositorio remoto
se crear un archivo
.gitignore
y luego introduzco alli las archivos que no queremos subir

ejemplo:
#Archivos SQL
\*.sql

y de esta manera no subiria los archivos sql
