import React, { useCallback, useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { NaverInfosProps, useNaver } from '../../hooks/naver';
import NaverDetailsModal from './NaverDetailsModal';
import { Container } from './styles';
import defaultAvatarImage from '../../assets/images/nave.png';
import CardLoader from './CardLoader';

interface Props {
  data: NaverInfosProps;
}

const Naver: React.FC<Props> = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [url, setUrl] = useState(data.url);
  const [isLoading, setIsloading] = useState(true);

  const history = useHistory();
  const { id, job_role, name } = data;
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

      {isLoading ? (
        <CardLoader />
      ) : (
        <Container>
          <button type="button" onClick={handleOpenModal}>
            <img
              src={url}
              alt={name}
              onLoad={() => {
                setIsloading(false);
              }}
              onError={() => {
                setUrl(defaultAvatarImage);
              }}
            />
          </button>
          <strong>{name}</strong>
          <p>{job_role}</p>
          <div>
            <FaTrash onClick={handleDeleteNaver} />
            <FaPen onClick={handleEditNaver} />
          </div>
        </Container>
      )}
    </>
  );
};

export default Naver;
