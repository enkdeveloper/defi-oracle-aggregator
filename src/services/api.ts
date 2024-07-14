import axios from 'axios';

const pythAPI = axios.create({
  baseURL: import.meta.env.VITE_PYTH_API_URL,
});

const chainlinkAPI = axios.create({
  baseURL: import.meta.env.VITE_CHAINLINK_API_URL,
});

export { pythAPI, chainlinkAPI };
