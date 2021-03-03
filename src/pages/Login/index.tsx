import React, { useCallback, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import logoImg from '../../assets/images/logo.svg';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormData): Promise<void> => {
      try {
        await signIn({ email: data.email, password: data.password });
        alert('Sucesso!');
      } catch (error) {
        alert('Erro ao autenticar!');
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={logoImg} alt="Logo" />
        <Input name="email" label="E-mail" />
        <Input name="password" label="Senha" type="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};
export default Login;
