import React from 'react';

const Usuario = ({ id, nome, email, isAdmin }) => {
  return (
    <div>
      <h3>{nome}</h3>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>{isAdmin ? 'Administrador' : 'Cliente'}</p>
    </div>
  );
};

export default Usuario;