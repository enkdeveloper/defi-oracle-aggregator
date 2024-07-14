import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CryptoData, CoinCapData, fetchCoinCapPrices } from '../services/cryptoService';

interface CryptoCardProps {
  crypto: CryptoData;
}

const Card = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CryptoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const CryptoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const CryptoName = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  font-size: 18px;
`;

const CryptoPrice = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  margin: 5px 0 0;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Details = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailSection = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailItem = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  margin: 5px 0;
`;

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [capData, setCapData] = useState<CoinCapData | null>(null);

  useEffect(() => {
    const fetchCapData = async () => {
      try {
        const data = await fetchCoinCapPrices();
        const coinData = data.find((coin) => coin.symbol.toLowerCase() === crypto.symbol.toLowerCase());
        setCapData(coinData || null);
      } catch (error) {
        console.error('Error fetching CoinCap data:', error);
      }
    };

    fetchCapData();
  }, [crypto.symbol]);

  const handleToggle = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <Card>
      <Header onClick={handleToggle}>
        <CryptoImage src={crypto.image} alt={crypto.name} />
        <CryptoInfo>
          <CryptoName>{crypto.name}</CryptoName>
          <CryptoPrice>${crypto.current_price.toFixed(2)}</CryptoPrice>
        </CryptoInfo>
      </Header>
      {showDetails && (
        <Details>
          <DetailSection>
            <h3>CoinGecko Data</h3>
            <DetailItem>Market Cap: ${crypto.market_cap.toLocaleString()}</DetailItem>
            <DetailItem>Total Volume: ${crypto.total_volume.toLocaleString()}</DetailItem>
            <DetailItem>24h High: ${crypto.high_24h.toFixed(2)}</DetailItem>
            <DetailItem>24h Low: ${crypto.low_24h.toFixed(2)}</DetailItem>
            <DetailItem>Price Change (24h): ${crypto.price_change_24h.toFixed(2)}</DetailItem>
            <DetailItem>Price Change Percentage (24h): {crypto.price_change_percentage_24h.toFixed(2)}%</DetailItem>
          </DetailSection>
          {capData && (
            <DetailSection>
              <h3>CoinCap Data</h3>
              <DetailItem>Market Cap: ${parseFloat(capData.marketCapUsd).toLocaleString()}</DetailItem>
              <DetailItem>Total Volume: ${parseFloat(capData.volumeUsd24Hr).toLocaleString()}</DetailItem>
              <DetailItem>Price: ${parseFloat(capData.priceUsd).toFixed(2)}</DetailItem>
              <DetailItem>1h Change: {parseFloat(capData.changePercent24Hr).toFixed(2)}%</DetailItem>
              <DetailItem>24h Change: {parseFloat(capData.changePercent24Hr).toFixed(2)}%</DetailItem>
              <DetailItem>7d Change: {parseFloat(capData.changePercent24Hr).toFixed(2)}%</DetailItem>
            </DetailSection>
          )}
        </Details>
      )}
    </Card>
  );
};

export default CryptoCard;
