import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  function handleGoHome() {
    history.push('/home');
  }

  return (
    <Container>
      <button type="button" onClick={handleGoHome}>
        <img src={logoImg} alt="Logo" />
      </button>

      <button type="button" onClick={signOut}>
        <p>Sair</p>
      </button>
    </Container>
  );
};

export default Header;
