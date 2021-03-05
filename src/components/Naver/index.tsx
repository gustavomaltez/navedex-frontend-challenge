import React, { useCallback, useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { NaverInfosProps, useNaver } from '../../hooks/naver';
import { Container } from './styles';
import defaultAvatarImage from '../../assets/images/nave.png';
import CardLoader from './CardLoader';
import { useNaverDetailsModal } from '../../hooks/naverDetailsModal';

interface Props {
  data: NaverInfosProps;
  style: object;
}

const Naver: React.FC<Props> = ({ data, style }) => {
  const { id, job_role, url, name } = data;
  const [imageSrc, setImageSrc] = useState(url);
  const [isLoading, setIsloading] = useState(true);

  const history = useHistory();
  const { openNaverDetailsModal } = useNaverDetailsModal();
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

  function handleOpenModal() {
    openNaverDetailsModal(data);
  }

  const handleDeleteNaver = useCallback(() => {
    deleteNaver(id);
  }, [id, deleteNaver]);

  const handleEditNaver = useCallback(() => {
    history.push(`/edit-naver/${id}`);
  }, [history, id]);

  return (
    <>
      {isLoading ? (
        <CardLoader />
      ) : (
        <Container style={style}>
          <button type="button" onClick={handleOpenModal}>
            <img src={imageSrc} alt={name} />
          </button>
          <strong>
            {name.length > 19 ? `${name.substr(0, 19)}...` : name}
          </strong>
          <p>
            {job_role.length > 19 ? `${job_role.substr(0, 19)}...` : job_role}
          </p>
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
