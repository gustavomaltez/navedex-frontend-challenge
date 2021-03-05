import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
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

  const transitions = useTransition(naversList, item => item.id, {
    from: { transform: 'translate3d(0,-40px,0)', opacity: 1 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
  });

  return (
    <Container>
      <Header />

      <section>
        <h1>Navers</h1>
        <button type="button" onClick={handleAddNaver}>
          <p>Adicionar Naver</p>
        </button>
      </section>

      <div>
        {transitions.map(({ item, key, props }) => (
          <Naver data={item} key={key} style={props} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
