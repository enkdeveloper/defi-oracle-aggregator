export interface PythPriceResponse {
    price: number;
  }
  
  export interface SecondOraclePriceResponse {
    price: number;
  }
  
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
  
  export interface CryptoDetailData {
    id: string;
    symbol: string;
    name: string;
    thumb: string;
    large: string;
  }
  
  export interface CryptoHistoryData {
    prices: [number, number][];
  }
  
  export interface CoinPaprikaQuote {
    price: number;
    market_cap: number;
    volume_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
  }
  
  export interface CoinPaprikaData {
    id: string;
    symbol: string;
    name: string;
    quotes: {
      USD: CoinPaprikaQuote;
    };
  }
  