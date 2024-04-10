import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import EditarUsuarioModal from './EditarUsuarioModal';
import './styles.css'; // Importando o arquivo de estilos CSS

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get('/Usuarios/ListarUsuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, [usuarioSelecionado]);

  const handleEditarUsuario = (usuario) => {
    setUsuarioSelecionado(usuario);
  };

  const handleExcluirUsuario = async (id) => {
    try {
      await api.delete(`/Usuarios/ExcluirUsuario/${id}`);
      const updatedUsuarios = usuarios.filter((usuario) => usuario.id !== id);
      setUsuarios(updatedUsuarios);
      console.log(`Usuário com ID ${id} excluído com sucesso.`);
    } catch (error) {
      console.error(`Erro ao excluir usuário com ID ${id}:`, error);
    }
  };

  const handleCloseModal = () => {
    setUsuarioSelecionado(null);
  };

  return (
    <div className="container">
      <h2>Lista de Usuários</h2>
      <Link to="/dashboard" className="back-link">
        Voltar para o Painel
      </Link>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email} - {usuario.isAdmin ? 'Administrador' : 'Usuário Comum'}
            <button onClick={() => handleEditarUsuario(usuario)}>Editar</button>
            <button onClick={() => handleExcluirUsuario(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {usuarioSelecionado && (
        <EditarUsuarioModal usuario={usuarioSelecionado} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ListaUsuarios;
