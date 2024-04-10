import React, { useState } from 'react';
import api from '../services/api';

const EditarUsuarioModal = ({ usuario, onClose }) => {
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [isAdmin, setIsAdmin] = useState(usuario.isAdmin);

  const handleAtualizarUsuario = async () => {
    try {
      const usuarioAtualizado = { ...usuario, nome, email, isAdmin };
      await api.put(`/Usuarios/AtualizarUsuario/${usuario.id}`, usuarioAtualizado);
      onClose(); // Fechar o modal após a atualização bem-sucedida
      window.location.reload(); // Recarregar a página de listagem de usuários
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Usuário</h2>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>
          Administrador:
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </label>
        <button onClick={handleAtualizarUsuario}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default EditarUsuarioModal;
