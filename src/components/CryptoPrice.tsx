import React from 'react';
import styled from 'styled-components';

interface CryptoPriceProps {
  symbol: string;
  price: number;
  change: number;
}

const PriceContainer = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Symbol = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  margin: 10px 0 0;
`;

const Change = styled.p<{ positive: boolean }>`
  color: ${({ positive, theme }) => (positive ? theme.colors.primary : 'red')};
  font-size: 18px;
  margin: 5px 0 0;
`;

const CryptoPrice: React.FC<CryptoPriceProps> = ({ symbol, price, change }) => (
  <PriceContainer>
    <Symbol>{symbol}</Symbol>
    <Price>${price.toFixed(2)}</Price>
    <Change positive={change >= 0}>{change.toFixed(2)}%</Change>
  </PriceContainer>
);

export default CryptoPrice;
