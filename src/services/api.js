import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7154/api', // Altere conforme o endereço da sua API
});

export default api;
