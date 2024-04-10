import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CadastroProduto from './components/CadastroProduto';
import ListaProdutos from './components/ListaProduto';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuario';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/produtos">Lista de Produtos</Link>
            </li>
            <li>
              <Link to="/cadastro-produto">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/usuarios">Lista de Usuários</Link>
            </li>
            <li>
              <Link to="/cadastro-usuario">Cadastrar Usuário</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/produtos" exact component={ListaProdutos} />
          <Route path="/cadastro-produto" component={CadastroProduto} />
          <Route path="/usuarios" exact component={ListaUsuarios} />
          <Route path="/cadastro-usuario" component={CadastroUsuario} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
