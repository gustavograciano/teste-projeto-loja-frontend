import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css'; // Importando o arquivo de estilos CSS

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoUsuario = {
      nome,
      email,
      senha,
      isAdmin
    };

    try {
      const response = await api.post('/Usuarios/AdicionarUsuario', novoUsuario);
      console.log('Usuário cadastrado:', response.data);
      setNome('');
      setEmail('');
      setSenha('');
      setIsAdmin(false);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      throw error;
    }
  };

  return (
    <div className="container">
      <h2>Cadastro de Usuário</h2>
      <Link to="/dashboard" className="back-link">
        Voltar para o Painel
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          Administrador
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
