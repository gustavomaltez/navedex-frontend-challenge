import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { NaverInfosProps, useNaver } from '../../hooks/naver';
import Input from '../Input';
import { Container } from './styles';

interface Props {
  label: string;
  onSubmit: SubmitHandler<any>;
  id?: string;
}

const NaverInfos: React.FC<Props> = ({ label, onSubmit, id }) => {
  const [initialData, setInitialData] = useState<NaverInfosProps>(
    {} as NaverInfosProps,
  );

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { getNaverDetails } = useNaver();
  function handleGoBack() {
    history.goBack();
  }

  const handleHasId = useCallback(async () => {
    if (id) {
      const naverData = await getNaverDetails(id);
      setInitialData(naverData);
    }
  }, [id, getNaverDetails]);

  useEffect(() => {
    handleHasId();
  }, [handleHasId]);
  return (
    <Container>
      <section>
        <FiChevronLeft onClick={handleGoBack} />
        <h1>{label}</h1>
      </section>
      <Form ref={formRef} onSubmit={onSubmit} initialData={initialData}>
        <div>
          <Input name="name" label="Nome" />
          <Input name="job_role" label="Cargo" />
          <Input name="birthdate" label="Idade" />
          <Input name="admission_date" label="Tempo de empresa" />
          <Input name="project" label="Projetos que participou" />
          <Input name="url" label="URL da foto do Naver" />
        </div>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
};

export default NaverInfos;
