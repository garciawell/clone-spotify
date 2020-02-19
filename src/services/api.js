import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.3.2:3000',
  baseURL: 'https://api-spotify-ng.herokuapp.com',
});

export default api;
