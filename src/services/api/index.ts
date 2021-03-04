import axios from 'axios';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
});

(function getStoredToken() {
  const authToken = localStorage.getItem('@NaveDex:token');
  if (authToken === null) {
    api.defaults.headers.authorization = null;
  } else {
    api.defaults.headers.authorization = `Bearer ${authToken}`;
  }
})();

export default api;
