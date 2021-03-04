import axios from 'axios';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@NaveDex:token')}`,
  },
});

export default api;
