import axios from 'axios'

export const http = axios.create({
  // baseURL: 'http://localhost:8080/'
  baseURL: 'https://terrariaapi.herokuapp.com/'
});
