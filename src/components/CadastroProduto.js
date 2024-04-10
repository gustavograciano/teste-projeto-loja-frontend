import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css'; // Importando o arquivo de estilos CSS

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      preco: parseFloat(preco),
      quantidade: parseInt(quantidade)
    };

    try {
      const response = await api.post('/Produtos/AdicionarProduto', novoProduto);
      console.log('Produto cadastrado:', response.data);
      setNome('');
      setPreco('');
      setQuantidade('');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      throw error;
    }
  };

  return (
    <div className="container">
      <h2>Cadastro de Produto</h2>
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

        <label htmlFor="preco">Preço:</label>
        <input
          type="number"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          step="0.01"
          required
        />

        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="number"
          id="quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
