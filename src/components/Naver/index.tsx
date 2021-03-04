import React, { useCallback, useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { NaverInfosProps, useNaver } from '../../hooks/naver';
import NaverDetailsModal from './NaverDetailsModal';
import { Container } from './styles';

interface Props {
  data: NaverInfosProps;
}

const Naver: React.FC<Props> = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const history = useHistory();
  const { id, url, job_role, name } = data;
  const { deleteNaver } = useNaver();

  function handleCloseModal() {
    setShowDetails(false);
  }

  function handleOpenModal() {
    setShowDetails(true);
  }
  const handleDeleteNaver = useCallback(() => {
    deleteNaver(id);
  }, [id, deleteNaver]);

  const handleEditNaver = useCallback(() => {
    history.push(`/edit-naver/${id}`);
  }, [history, id]);

  return (
    <>
      {showDetails && (
        <NaverDetailsModal data={data} onClose={handleCloseModal} />
      )}
      <Container>
        <button type="button" onClick={handleOpenModal}>
          <img src={url} alt={name} />
        </button>
        <strong>{name}</strong>
        <p>{job_role}</p>
        <div>
          <FaTrash onClick={handleDeleteNaver} />
          <FaPen onClick={handleEditNaver} />
        </div>
      </Container>
    </>
  );
};

export default Naver;
