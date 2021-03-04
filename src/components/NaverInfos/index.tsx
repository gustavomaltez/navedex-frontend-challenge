import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Input from '../Input';
import { Container } from './styles';

export interface NaverInfosProps {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

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

  function handleGoBack() {
    history.goBack();
  }

  useEffect(() => {
    async function getNaverData() {
      try {
        const response = await api.get(`/navers/${id}`);
        setInitialData(response.data);
      } catch (error) {
        alert('Erro ao obter dados do Naver!');
      }
    }

    if (id) {
      getNaverData();
    }
  }, []);
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
