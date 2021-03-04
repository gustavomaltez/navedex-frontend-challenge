import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Naver from '../../components/Naver';
import api from '../../services/api';
import { Container } from './styles';

interface NaverData {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<NaverData[]>([] as NaverData[]);

  const history = useHistory();

  useEffect(() => {
    async function getNaversData() {
      try {
        const response = await api.get('/navers');
        setNavers(response.data);
      } catch (error) {
        alert('Erro ao buscar navers');
      }
    }

    getNaversData();
  }, []);

  function handleAddNaver() {
    history.push('/add-naver');
  }

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
        {navers.map(naver => (
          <Naver data={naver} key={naver.id} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
