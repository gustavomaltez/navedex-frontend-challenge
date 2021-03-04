import React, { useCallback, useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import NaverInfos, { NaverInfosProps } from '../../components/NaverInfos';
import { useModal } from '../../hooks/modal';
import api from '../../services/api';
import { Container } from './styles';

const AddNaver: React.FC = () => {
  const history = useHistory();

  const { openModal } = useModal();
  const handleSubmit = useCallback(
    async (data: NaverInfosProps): Promise<void> => {
      try {
        await api.post('/navers/', data);
        openModal({
          title: 'Naver criado',
          text: 'Naver criado com sucesso',
        });
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
        <NaverInfos label="Adicionar Naver" onSubmit={handleSubmit} />
      </main>
    </Container>
  );
};

export default AddNaver;
