import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import NaverInfos, { NaverInfosProps } from '../../components/NaverInfos';
import api from '../../services/api';
import { Container } from './styles';

interface EditNaverParams {
  id: string;
}

const EditNaver: React.FC = () => {
  const { params } = useRouteMatch<EditNaverParams>();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: NaverInfosProps): Promise<void> => {
      try {
        await api.put(`/navers/${params.id}`, data);
        alert('Sucesso!');
        history.goBack();
      } catch (error) {
        alert('Erro ao atualizar naver!');
      }
    },
    [],
  );

  return (
    <Container>
      <Header />
      <main>
        <NaverInfos
          label="Adicionar Naver"
          id={params.id}
          onSubmit={handleSubmit}
        />
      </main>
    </Container>
  );
};

export default EditNaver;
