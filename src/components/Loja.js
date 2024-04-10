import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css'; // Importando o arquivo de estilos CSS

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/Produtos/ListarProdutos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleCompra = async (produto) => {
    try {
      const payload = {
        produtoId: produto.id,
        quantidade: 1, // Quantidade fixa (1 unidade) para cada compra
        usuarioId: 'id-do-usuario', // Substitua 'id-do-usuario' pelo ID do usuário logado (se necessário)
        dataCompra: new Date().toISOString(),
        produto: {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1
        }
      };

      // Chamar a API para realizar a compra do produto
      await api.post('/Pedido/NovoPedido', payload);
      alert('Compra efetuada com sucesso!');
    } catch (error) {
      console.error('Erro ao efetuar compra:', error);
      alert('Erro ao efetuar compra.');
    }
  };

  return (
    <div className="container">
      <h2>Loja</h2>
      <Link to="/dashboard" className="back-link">
        Voltar para o Painel
      </Link>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
            <button onClick={() => handleCompra(produto)}>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;
