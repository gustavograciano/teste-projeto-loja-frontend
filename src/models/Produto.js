// src/models/Produto.js
import React from 'react';

class Produto {
  constructor({ id, nome, preco, quantidade }) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

export default Produto;
