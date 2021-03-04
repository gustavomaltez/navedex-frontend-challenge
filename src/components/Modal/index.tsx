import React from 'react';
import { FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';
import { Container } from './styles';

interface ModalProps {
  title: string;
  text: string;
  onConfirmAction?: () => void | Promise<void>;
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
    okButtonLabel = 'Ok',
    cancelButtonLabel = 'Cancelar',
  },
}) => {
  const { closeModal } = useModal();
  return (
    <Container>
      <main>
        {!onConfirmAction && <FiX onClick={closeModal} />}
        <h1>{title}</h1>
        <p>{text}</p>

        {onConfirmAction && (
          <div>
            <button type="button" onClick={closeModal}>
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
