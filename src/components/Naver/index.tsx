import React, { useCallback } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useNaver } from '../../hooks/naver';
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

  const { deleteNaver } = useNaver();

  const handleDeleteNaver = useCallback(() => {
    deleteNaver(id);
  }, [id, deleteNaver]);

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
