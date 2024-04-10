import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardAdmin.css'; // Importando o arquivo de estilos CSS

const DashboardAdmin = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para realizar o logout e redirecionar para a página de login
    // Exemplo simplificado: apenas redireciona para a raiz
    navigate('/Login'); // Redireciona para a página inicial ou tela de login após o logout
  };

  return (
    <div className="dashboard-container">
      {/* Cabeçalho */}
      <header className="dashboard-header">
        <h1>Painel do Administrador</h1>
        <p>Bem-vindo ao painel de administração!</p>
        <button onClick={handleLogout}>Logout</button> {/* Botão de logout */}
      </header>

      {/* Conteúdo principal (condicional com base em isAdmin) */}
      {isAdmin ? (
        <div className="dashboard-content">
          {/* Menu */}
          <div className="dashboard-menu">
            <h2>Menu:</h2>
            <ul>
              <li>
                <Link to="/loja">Loja</Link>
              </li>
              <li>
                <Link to="/cadastro-produto">Cadastrar Produto</Link>
              </li>
              <li>
                <Link to="/gerenciar-produto">Gerenciar Produto</Link>
              </li>
              <li>
                <Link to="/usuarios">Lista de Usuários</Link>
              </li>
              <li>
                <Link to="/cadastro-usuario">Cadastrar Usuário</Link>
              </li>
              <li>
                <Link to="/lista-pedidos">Listar Pedidos</Link>
              </li>
              <li>
                <Link to="/dashboard">Painel</Link>
              </li>
            </ul>
          </div>
          
        </div>
      ) : (
        <p>Você não tem permissão para acessar esta página.</p>
      )}

      {/* Rodapé */}
      <footer className="dashboard-footer">
        <p>© 2024 Empresa ABC - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default DashboardAdmin;
