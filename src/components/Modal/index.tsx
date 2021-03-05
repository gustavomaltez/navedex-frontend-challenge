import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';
import { Container } from './styles';

interface ModalProps {
  title: string;
  text: string;
  onConfirmAction?: () => void | Promise<void>;
  onCloseAction?: () => void | Promise<void>;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
}
interface Props {
  data: ModalProps;
}

const Modal: React.FC<Props> = ({
  data: {
    title,
    text,
    onConfirmAction,
    onCloseAction,
    okButtonLabel = 'Ok',
    cancelButtonLabel = 'Cancelar',
  },
}) => {
  const [willClose, setWillClose] = useState(false);
  const { closeModal } = useModal();

  function handleCloseModal() {
    setWillClose(true);

    setTimeout(() => {
      if (onCloseAction) {
        onCloseAction();
      }

      closeModal();
    }, 150);
  }

  return (
    <Container willClose={willClose}>
      <main>
        {!onConfirmAction && <FiX onClick={handleCloseModal} />}
        <h1>{title}</h1>
        <p>{text}</p>

        {onConfirmAction && (
          <div>
            <button type="button" onClick={handleCloseModal}>
              {cancelButtonLabel}
            </button>
            <button type="button" onClick={onConfirmAction}>
              {okButtonLabel}
            </button>
          </div>
        )}
      </main>
    </Container>
  );
};

export default Modal;
