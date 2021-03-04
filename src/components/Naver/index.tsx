import React, { useCallback } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../hooks/modal';
import api from '../../services/api';
import { Container } from './styles';

interface NaverData {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

interface Props {
  data: NaverData;
}

const Naver: React.FC<Props> = ({ data: { name, job_role, url, id } }) => {
  const history = useHistory();

  const { openModal } = useModal();

  const deleteNaver = useCallback(async () => {
    try {
      await api.delete(`/navers/${id}`);
      openModal({
        title: 'Naver excluído',
        text: 'Naver excluído com sucesso!',
      });
    } catch (error) {
      alert('Erro ao deletar Naver!');
    }
  }, [id]);

  const handleDeleteNaver = useCallback(() => {
    openModal({
      title: 'Excluir Naver',
      text: 'Tem certeza que deseja excluir este Naver?',
      okButtonLabel: 'Excluir',
      onConfirmAction: deleteNaver,
    });
  }, [deleteNaver, openModal]);

  const handleEditNaver = useCallback(() => {
    history.push(`/edit-naver/${id}`);
  }, [history, id]);

  return (
    <Container>
      <img src={url} alt={name} />
      <strong>{name}</strong>
      <p>{job_role}</p>
      <div>
        <FaTrash onClick={handleDeleteNaver} />
        <FaPen onClick={handleEditNaver} />
      </div>
    </Container>
  );
};

export default Naver;
