import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio na descrição da aula
const Pagina404 = () => (<div>Página 404</div>)

/**
 * Dentro do Switch - Opcao 2
 * <Route component = {() => (<div>Página 404</div>)} />
 */
ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component = {Home} exact />
        <Route path="/cadastro/video" component = {CadastroVideo} />       
        <Route path="/cadastro/categoria" component = {CadastroCategoria} />       
        <Route path="/" component = {Pagina404} />        
      </Switch>      
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
