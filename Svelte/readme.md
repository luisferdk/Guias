# Svelte

_Es un nuevo Framework para crear interfaces de usuario_


## Carácteristicas 🚀

  * No más código innecesario
  * No Virtual DOM (Compila el Proyecto)
  * Reactividad de Verdad


## Instalación 🔧

```bash
npx degit sveltejs/template svelte
cd svelte
npm install
```

## Estructura de un Componente

```html
<script>
  // Variables que Local
  let name="Luis";
  // Variable que se le pasa como Propiedad
  export let lastName="Fernández";
<script>

<style>
  /* CSS Global */
  :global(body) {
    background-color: #f2eee2;
    color: blue;
  }

  /* Variables Globales */
  :global(:root) {
    --theme-color: purple;
  }
  
  /* CSS de Mi Component */
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
<style>

<div class="About">
</div>
```

## Quién lo Usa: 💯

  * chess.com
  * Godaddy
  * The New York Times


## Autor ✒️

**Luis Fernández** - [luisferdk](https://github.com/luisferdk)

