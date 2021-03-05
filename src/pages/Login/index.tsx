import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import logoImg from '../../assets/images/logo.svg';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData): Promise<void> => {
      try {
        await signIn({ email: data.email, password: data.password });
        history.push('/home');
        addToast({
          type: 'success',
          title: 'Autenticado com sucesso!',
          description:
            'Você foi autenticado com sucesso. Sua sessão está salva no navegador.',
        });
      } catch (error) {
        if (error.response) {
          const { status } = error.response;

          if (status >= 400 && status < 500) {
            addToast({
              type: 'error',
              title: 'Erro na autenticação',
              description:
                'Ocorreu um erro ao fazer login, cheque as credenciais.',
            });
          } else {
            addToast({
              type: 'error',
              title: 'Erro na autenticação',
              description:
                'Falha ao se conectar com o servidor. Por favor, tente novamente',
            });
          }
        }
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={logoImg} alt="Logo" />
        <Input name="email" label="E-mail" type="email" />
        <Input name="password" label="Senha" type="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};
export default Login;
