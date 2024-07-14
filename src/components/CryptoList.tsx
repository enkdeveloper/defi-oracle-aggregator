import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchCoinGeckoPrices, CryptoData } from '../services/cryptoService';
import CryptoCard from './CryptoCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface CryptoListProps {
  searchTerm: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ searchTerm }) => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinGeckoPrices();
        setCryptos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListContainer>
      {filteredCryptos.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </ListContainer>
  );
};

export default CryptoList;
