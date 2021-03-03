import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import logoImg from '../../assets/images/logo.svg';
import { Container } from './styles';

interface FormData {
  name: string;
  email: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(formRef);
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={logoImg} alt="Logo" />
        <Input name="name" label="E-mail" />
        <Input name="email" label="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};
export default Login;
