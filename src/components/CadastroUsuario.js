import React, { useState } from 'react';
import api from '../services/api';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoUsuario = { nome, email, senha };

    try {
      const response = await api.post('/usuarios', novoUsuario);
      console.log('Usuário cadastrado:', response.data);
      // Lógica para atualizar a lista de usuários após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
