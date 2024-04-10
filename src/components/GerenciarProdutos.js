import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css'; // Importando o arquivo de estilos CSS
import EditarProdutoModal from './EditarProdutoModal';


const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

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
  }, [produtoSelecionado]);

  const handleEditarProduto = (produto) => {
    setProdutoSelecionado(produto);
  };

  const handleExcluirProduto = async (id) => {
    try {
      await api.delete(`/Produtos/ExcluirProduto/${id}`);
      const updatedProdutos = produtos.filter((produto) => produto.id !== id);
      setProdutos(updatedProdutos);
      console.log(`Produto com ID ${id} excluído com sucesso.`);
    } catch (error) {
      console.error(`Erro ao excluir produto com ID ${id}:`, error);
    }
  };

  const handleCloseModal = () => {
    setProdutoSelecionado(null);
  };

  return (
    <div className="container">
      <h2>Gerenciar Produtos</h2>
      <Link to="/dashboard" className="back-link">
        Voltar para o Painel
      </Link>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
            <button onClick={() => handleEditarProduto(produto)}>Editar</button>
            <button onClick={() => handleExcluirProduto(produto.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {produtoSelecionado && (
        <EditarProdutoModal produto={produtoSelecionado} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ListaProdutos;
