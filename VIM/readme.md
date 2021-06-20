# VIM
## Comandos Básicos
```bash
h, j ,k, l	Para desplazarnos, en lugar de movernos con las flechas del teclado, nos movemos con estas letras ( h: ← j: ↓ k: ↑ l: → )
w, b	La w para desplazar el cursor una palabra hacia adelante y la b para desplazarnos una palabra hacia atrás
0, $	El 0 sirve para desplazarnos hacia el inicio de la linea en la que nos encontremos y $ para movernos al final
^	Para movernos hasta el primer carácter no vacío de la linea
gg, G	gg para movernos al principio del documento y G para movernos al final
d	Este comando se utiliza después de usar uno de los anteriores, elimina desde la posicion de nuestro cursor hasta el desplazamiento indicado
dd	Elimina toda la linea sobre la que se encuentre el cursor
y,p	y para copiar el texto hasta el desplazamiento que le indiquemos con los comandos anteriores, p para pegar
. (punto)	Con este comando repetiremos el comando ejecutado anteriormente
```

## Instalar Theme Monokai
Put `monokai.vim` file in your `~/.vim/colors/` directory and add the following line to your `~/.vimrc`:
    syntax enable
    colorscheme monokai
