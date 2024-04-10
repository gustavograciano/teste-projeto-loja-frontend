import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/Usuarios/Login', { email, senha });
      const usuario = response.data;
      onLogin(usuario.isAdmin);

      if (usuario.isAdmin) {
        console.log('Usuário é administrador');
        navigate('/dashboard');
      } else {
        console.log('Usuário não é administrador');
        navigate('/loja');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Ainda não tem uma conta?{' '}
        <Link to="/cadastro-usuario">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;