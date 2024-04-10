import React, { useState } from 'react';
import api from '../services/api';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProduto = { nome, preco: parseFloat(preco), quantidade: parseInt(quantidade) };

    try {
      const response = await api.post('/produtos', novoProduto);
      console.log('Produto cadastrado:', response.data);
      // Lógica para atualizar a lista de produtos após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Preço:</label>
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
        <label>Quantidade:</label>
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
