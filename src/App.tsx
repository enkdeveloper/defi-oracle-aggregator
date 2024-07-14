import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CryptoList from './components/CryptoList';
import logo from './assets/logo.png'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const CryptoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1500px;
  padding: 20px;
  background-color: #282828;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(75, 192, 192, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const SearchInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80px;
    margin-bottom: 15px;
  }
`;

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <CryptoListContainer>
          <Logo src={logo} alt="Logo" /> 
          <Title>Crypto Aggregator</Title>
          <SearchInput
            type="text"
            placeholder="Search for a coin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CryptoList searchTerm={searchTerm} />
        </CryptoListContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
