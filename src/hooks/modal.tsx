import React, { createContext, useContext, useState } from 'react';

interface ModalProps {
  title: string;
  text: string;
  onConfirmAction?: () => void;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
}

interface ModalContextData {
  openModal: (data: ModalProps) => void;
}

const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modalData, setModalData] = useState({} as ModalProps);

  function openModal({
    title,
    text,
    onConfirmAction,
    okButtonLabel,
    cancelButtonLabel,
  }: ModalProps): void {
    setModalData({
      title,
      text,
      onConfirmAction,
      okButtonLabel,
      cancelButtonLabel,
    });
  }

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
