import React from 'react';
import Header from '../../components/Header';
import NaverInfos from '../../components/NaverInfos';
import { NaverInfosProps, useNaver } from '../../hooks/naver';
import { Container } from './styles';

const AddNaver: React.FC = () => {
  const { addNaver } = useNaver();

  function handleSubmit(data: NaverInfosProps): void {
    addNaver(data);
  }

  return (
    <Container>
      <Header />
      <main>
        <NaverInfos label="Adicionar Naver" onSubmit={handleSubmit} />
      </main>
    </Container>
  );
};

export default AddNaver;
