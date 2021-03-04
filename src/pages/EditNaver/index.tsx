import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import NaverInfos, { NaverInfosProps } from '../../components/NaverInfos';
import { useNaver } from '../../hooks/naver';
import { Container } from './styles';

interface EditNaverParams {
  id: string;
}

const EditNaver: React.FC = () => {
  const { params } = useRouteMatch<EditNaverParams>();

  const { editNaver } = useNaver();

  const handleSubmit = useCallback((formData: NaverInfosProps): void => {
    const naverData = { ...formData, id: params.id };
    editNaver(naverData);
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <NaverInfos
          label="Editar Naver"
          id={params.id}
          onSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default EditNaver;
