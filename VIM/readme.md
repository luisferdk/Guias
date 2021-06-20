# VIM
## Comandos Básicos
```bash
h, j ,k, l	( ←h  j↓ k↑ l→ )
w, b	( ←b w→ ) Por palabra
0, $	( ←0 $→ ) Por linea
^   Para movernos hasta el primer carácter no vacío de la linea
gg, G	G↓ gg↑ principio y final del archivo
d	Este comando se utiliza después de usar uno de los anteriores, elimina desde la posicion de nuestro cursor hasta el desplazamiento indicado
dd	Elimina toda la linea sobre la que se encuentre el cursor
y,p	y para copiar el texto hasta el desplazamiento que le indiquemos con los comandos anteriores, p para pegar
. (punto)	Con este comando repetiremos el comando ejecutado anteriormente
```

## Instalar Theme Monokai
Put `monokai.vim` file in your `~/.vim/colors/` directory and add the following line to your `~/.vimrc`:
    syntax enable
    colorscheme monokai
