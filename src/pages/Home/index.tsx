import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <h1>Navers</h1>
          <button type="button">Adicionar Naver</button>
        </section>
      </Container>
    </>
  );
};

export default Home;
