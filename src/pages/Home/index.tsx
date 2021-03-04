import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Naver from '../../components/Naver';
import { useNaver } from '../../hooks/naver';
import { Container } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const { naversList, updateNaverList } = useNaver();

  function handleAddNaver() {
    history.push('/add-naver');
  }

  useEffect(() => {
    updateNaverList();
  }, [updateNaverList]);

  return (
    <Container>
      <Header />

      <section>
        <h1>Navers</h1>
        <button type="button" onClick={handleAddNaver}>
          Adicionar Naver
        </button>
      </section>

      <div>
        {naversList.map(naver => (
          <Naver data={naver} key={naver.id} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
