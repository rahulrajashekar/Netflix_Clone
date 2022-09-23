import axios from 'axios';
import { baseURL } from './apiKeys';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
