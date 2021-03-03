import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <button type="button" onClick={signOut}>
        Sair
      </button>
    </Container>
  );
};

export default Header;
