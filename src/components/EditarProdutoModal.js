import React, { useState } from 'react';
import api from '../services/api';

const EditarProdutoModal = ({ produto, onClose }) => {
  const [nome, setNome] = useState(produto.nome);
  const [preco, setPreco] = useState(produto.preco);
  const [quantidade, setQuantidade] = useState(produto.quantidade);

  const handleAtualizarProduto = async () => {
    try {
      const produtoAtualizado = { ...produto, nome, preco, quantidade };
      await api.put(`/Produtos/AtualizarProduto/${produto.id}`, produtoAtualizado);
      onClose(); // Fechar o modal após a atualização bem-sucedida
      window.location.reload(); // Recarregar a página de listagem de produtos
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Produto</h2>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Preço:</label>
        <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
        <label>Quantidade:</label>
        <input type="int" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        <button onClick={handleAtualizarProduto}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default EditarProdutoModal;
