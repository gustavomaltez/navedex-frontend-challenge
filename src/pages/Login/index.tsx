import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';

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
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="E-mail" />
      <Input name="email" label="Senha" />
    </Form>
  );
};
export default Login;
