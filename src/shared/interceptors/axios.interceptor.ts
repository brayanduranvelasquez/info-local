import axios from 'axios';

const URL: string = import.meta.env.VITE_BACKEND;
const modifiedAxios = axios.create({ baseURL: URL, timeout: 10000 });

export default modifiedAxios;
