import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';
const COINCAP_API_URL = 'https://api.coincap.io/v2';

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export interface CoinCapData {
  id: string;
  symbol: string;
  name: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
  changePercent24Hr: string;
}

export const fetchCoinGeckoPrices = async (): Promise<CryptoData[]> => {
  try {
    const response = await axios.get<CryptoData[]>(`${COINGECKO_API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });

    console.log('CoinGecko API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching CoinGecko prices:', error);
    throw error;
  }
};

export const fetchCoinCapPrices = async (): Promise<CoinCapData[]> => {
  try {
    const response = await axios.get<{ data: CoinCapData[] }>(`${COINCAP_API_URL}/assets`);
    console.log('CoinCap API Response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching CoinCap prices:', error);
    throw error;
  }
};
