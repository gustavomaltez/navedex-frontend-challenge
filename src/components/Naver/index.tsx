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
  const { id, job_role, url, name } = data;
  const [imageSrc, setImageSrc] = useState(url);
  const [isLoading, setIsloading] = useState(true);

  const history = useHistory();
  const { deleteNaver } = useNaver();

  const img = new Image();
  img.src = url;

  img.onload = () => {
    setIsloading(false);
  };

  img.onerror = () => {
    setIsloading(false);
    setImageSrc(defaultAvatarImage);
  };

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
            <img src={imageSrc} alt={name} />
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
