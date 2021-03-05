import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { NaverProvider } from './naver';
import { NaverDetailsModalProvider } from './naverDetailsModal';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <ModalProvider>
        <NaverProvider>
          <NaverDetailsModalProvider>{children}</NaverDetailsModalProvider>
        </NaverProvider>
      </ModalProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
