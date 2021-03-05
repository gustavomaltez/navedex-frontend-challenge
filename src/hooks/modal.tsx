import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';
import NaverDetailsModal from '../components/Naver/NaverDetailsModal';
import { NaverInfosProps } from './naver';

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
  openNaverDetailsModal: (data: NaverInfosProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modalData, setModalData] = useState({} as ModalProps);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [naverDetailsModalData, setNaverDetailsModalData] = useState(
    {} as NaverInfosProps,
  );
  const [showNaverDetailsModal, setShowNaverDetailsModal] = useState(false);

  function handleCloseNaverDetailsModal() {
    setShowNaverDetailsModal(false);
    setNaverDetailsModalData({} as NaverInfosProps);
  }

  function openNaverDetailsModal(data: NaverInfosProps) {
    setNaverDetailsModalData(data);
    setShowNaverDetailsModal(true);
  }

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
    <ModalContext.Provider
      value={{ openModal, closeModal, openNaverDetailsModal }}
    >
      {children}
      {isModalOpen && <Modal data={modalData} />}
      {showNaverDetailsModal && (
        <NaverDetailsModal
          data={naverDetailsModalData}
          onClose={handleCloseNaverDetailsModal}
        />
      )}
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
