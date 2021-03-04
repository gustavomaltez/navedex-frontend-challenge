import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { NaverProvider } from './naver';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ModalProvider>
      <NaverProvider>{children}</NaverProvider>
    </ModalProvider>
  </AuthProvider>
);

export default AppProvider;
