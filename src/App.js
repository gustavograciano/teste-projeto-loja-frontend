import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroProduto from './components/CadastroProduto';
import GerenciarProdutos from './components/GerenciarProdutos';
import Loja from './components/Loja';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuario';
import Login from './components/Login';
import DashboardAdmin from './components/DashboardAdmin';
import ListaPedidos from './components/ListaPedidos';


const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (adminStatus) => {
    setIsAdmin(adminStatus);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/loja" element={<Loja />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/gerenciar-produto" element={<GerenciarProdutos />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/lista-pedidos" element={<ListaPedidos />} />
        <Route path="/dashboard" element={<DashboardAdmin isAdmin={isAdmin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
