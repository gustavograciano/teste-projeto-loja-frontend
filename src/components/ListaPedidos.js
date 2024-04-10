import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css';

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get('/Pedido/TodasVendas');
        setPedidos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div className="container">
      <h2>Listagem de Pedidos</h2>
      <Link to="/dashboard" className="back-link">
        Voltar para o Painel
      </Link>
      <table className="pedidos-table">
        <thead>
          <tr>
            <th>ID do Pedido</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Data da Compra</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.produto.nome}</td>
              <td>R$ {pedido.produto.preco.toFixed(2)}</td>
              <td>{pedido.quantidade}</td>
              <td>{new Date(pedido.dataCompra).toLocaleDateString()}</td>
              <td>{pedido.usuarioId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPedidos;
