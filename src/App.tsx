import React from 'react';
import Login from './pages/Login';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => (
  <AppProvider>
    <Login />
    <GlobalStyle />
  </AppProvider>
);

export default App;
