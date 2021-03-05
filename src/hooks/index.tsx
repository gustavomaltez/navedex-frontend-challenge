import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { NaverProvider } from './naver';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <ModalProvider>
        <NaverProvider>{children}</NaverProvider>
      </ModalProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
