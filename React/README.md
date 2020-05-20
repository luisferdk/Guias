# React

_Para crear un proyecto en react lo podemos empezar con create-react-app o podemos configurar webpack con babel_

_`Con create-react-app:` Es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo._
```bash
npm i -g create-react-app
create-react-app newApp
```

## JSX
_Es sintaxis sugar para usar html en nuestro javascript_


## Ciclo de Vida
  1. constructor(props)
  2. render()
  3. componentDidMount()
  4. render()
  5. componentDidUpdate(prevProps, prevState)
  6. componentWillUnmount()


## Eventos
  1. onClick={this.handleClick}
  2. onKeyDown={this.handleKeyDown}
  2. onChange={this.handleChange}


## React DOM
  ReactDOM.render(component, donde);
  ReactDOM.render(<App />, container);


## React Router DOM
  ```js
  import { BrowserRouter, Switch, Route } from 'react-router-dom';
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  ```

## Llamadas a un API

_Tenemos 3 estados_

* `Loading`: cuando la petición se envía y estamos esperando.

* `Error`: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.

* `Data`: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.
