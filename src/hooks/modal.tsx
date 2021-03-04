import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface ModalProps {
  title: string;
  text: string;
  onConfirmAction?: () => void | Promise<void>;
  onCloseAction?: () => void | Promise<void>;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
}

interface ModalContextData {
  openModal: (data: ModalProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modalData, setModalData] = useState({} as ModalProps);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
    setModalData({} as ModalProps);
  }

  function openModal({
    title,
    text,
    onConfirmAction,
    okButtonLabel,
    cancelButtonLabel,
    onCloseAction,
  }: ModalProps): void {
    closeModal();
    setModalData({
      title,
      text,
      onConfirmAction,
      okButtonLabel,
      cancelButtonLabel,
      onCloseAction,
    });
    setIsModalOpen(true);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModalOpen && <Modal data={modalData} />}
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
