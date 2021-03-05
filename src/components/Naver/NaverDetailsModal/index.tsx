import React, { useCallback, useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { differenceInYears } from 'date-fns';
import { NaverInfosProps, useNaver } from '../../../hooks/naver';
import { Container } from './styles';
import defaultAvatarImage from '../../../assets/images/nave.png';
import ImageLoader from './ImageLoader';

interface Props {
  data: NaverInfosProps;
  onClose: () => void;
}

const NaverDetailsModal: React.FC<Props> = ({
  data: { id, name, admission_date, birthdate, job_role, project, url },
  onClose,
}) => {
  const [isLoading, setIsloading] = useState(true);
  const [imageSrc, setImageSrc] = useState(url);
  const [willClose, setWillClose] = useState(false);
  const history = useHistory();

  const { deleteNaver } = useNaver();

  const age = differenceInYears(new Date(), new Date(birthdate));
  const timeInCompany = differenceInYears(new Date(), new Date(admission_date));

  const handleDeleteNaver = useCallback(() => {
    deleteNaver(id);
  }, [id, deleteNaver]);

  function handleOnClose() {
    setWillClose(true);
    setTimeout(onClose, 150);
  }

  const handleEditNaver = useCallback(() => {
    setWillClose(true);
    setTimeout(() => {
      history.push(`/edit-naver/${id}`);
      onClose();
    }, 150);
  }, [history, id, onClose]);

  const img = new Image();
  img.src = url;

  img.onload = () => {
    setIsloading(false);
  };

  img.onerror = () => {
    setIsloading(false);
    setImageSrc(defaultAvatarImage);
  };
  return (
    <Container willClose={willClose}>
      <main>
        <section>
          {isLoading ? <ImageLoader /> : <img src={imageSrc} alt={name} />}
        </section>
        <section>
          <FiX onClick={handleOnClose} />

          <span>
            <h1>{name}</h1>
            <p>{job_role}</p>
          </span>

          <span>
            <strong>Idade</strong>
            <p>
              {age} {age === 1 ? 'Ano' : 'Anos'}
            </p>
          </span>

          <span>
            <strong>Tempo de empresa</strong>
            <p>
              {timeInCompany} {timeInCompany === 1 ? 'Ano' : 'Anos'}
            </p>
          </span>

          <span>
            <strong>Projetos que participou</strong>
            <p>{project}</p>
          </span>

          <div>
            <FaTrash onClick={handleDeleteNaver} />
            <FaPen onClick={handleEditNaver} />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default NaverDetailsModal;
