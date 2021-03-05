import React, { createContext, useContext, useState } from 'react';
import NaverDetailsModal from '../components/Naver/NaverDetailsModal';
import { NaverInfosProps } from './naver';

interface NaverDetailsModalContextData {
  openNaverDetailsModal: (data: NaverInfosProps) => void;
}

const NaverDetailsModalContext = createContext(
  {} as NaverDetailsModalContextData,
);

const NaverDetailsModalProvider: React.FC = ({ children }) => {
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

  return (
    <NaverDetailsModalContext.Provider value={{ openNaverDetailsModal }}>
      {children}

      {showNaverDetailsModal && (
        <NaverDetailsModal
          data={naverDetailsModalData}
          onClose={handleCloseNaverDetailsModal}
        />
      )}
    </NaverDetailsModalContext.Provider>
  );
};

function useNaverDetailsModal(): NaverDetailsModalContextData {
  const context = useContext(NaverDetailsModalContext);

  if (!context) {
    throw new Error(
      'useNaverDetailsModal must be used within a NaverDetailsModalProvider',
    );
  }

  return context;
}

export { NaverDetailsModalProvider, useNaverDetailsModal };
