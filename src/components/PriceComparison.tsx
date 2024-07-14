import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCoinGeckoPrices, fetchCoinCapPrices, CryptoData, CoinCapData } from '../services/cryptoService';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: 1px solid #444;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const PriceComparison: React.FC = () => {
  const [coinGeckoPrices, setCoinGeckoPrices] = useState<CryptoData[]>([]);
  const [coinCapPrices, setCoinCapPrices] = useState<CoinCapData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [geckoPrices, capPrices] = await Promise.all([
          fetchCoinGeckoPrices(),
          fetchCoinCapPrices(),
        ]);

        setCoinGeckoPrices(geckoPrices);
        setCoinCapPrices(capPrices);

        console.log('CoinGecko Prices:', geckoPrices); // CoinGecko verilerini kontrol edin
        console.log('CoinCap Prices:', capPrices); // CoinCap verilerini kontrol edin
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchData();
  }, []);

  const findCoinCapData = (symbol: string) => {
    const coin = coinCapPrices.find((c) => c.symbol.toLowerCase() === symbol.toLowerCase());
    console.log(`CoinCap data for ${symbol}:`, coin); // Eşleştirilen veriyi kontrol edin
    return coin || null;
  };

  return (
    <Container>
      <Title>Crypto Price Comparison</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Coin</TableHeader>
            <TableHeader>CoinGecko Price (USD)</TableHeader>
            <TableHeader>CoinCap Price (USD)</TableHeader>
            <TableHeader>Market Cap (CoinGecko)</TableHeader>
            <TableHeader>Market Cap (CoinCap)</TableHeader>
            <TableHeader>Volume (CoinGecko)</TableHeader>
            <TableHeader>Volume (CoinCap)</TableHeader>
            <TableHeader>24h Change (CoinGecko)</TableHeader>
            <TableHeader>24h Change (CoinCap)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {coinGeckoPrices.map((coin) => {
            const capData = findCoinCapData(coin.symbol);
            return (
              <TableRow key={coin.id}>
                <TableCell>{coin.name}</TableCell>
                <TableCell>{coin.current_price.toFixed(2)}</TableCell>
                <TableCell>{capData ? parseFloat(capData.priceUsd).toFixed(2) : 'N/A'}</TableCell>
                <TableCell>{coin.market_cap.toLocaleString()}</TableCell>
                <TableCell>{capData ? parseFloat(capData.marketCapUsd).toLocaleString() : 'N/A'}</TableCell>
                <TableCell>{coin.total_volume.toLocaleString()}</TableCell>
                <TableCell>{capData ? parseFloat(capData.volumeUsd24Hr).toLocaleString() : 'N/A'}</TableCell>
                <TableCell>{coin.price_change_percentage_24h.toFixed(2)}%</TableCell>
                <TableCell>{capData ? parseFloat(capData.changePercent24Hr).toFixed(2) : 'N/A'}%</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PriceComparison;
