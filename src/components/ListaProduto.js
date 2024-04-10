import React, { useState, useEffect } from 'react';
import api from '../services/api';


const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco} - Quantidade: {produto.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;
