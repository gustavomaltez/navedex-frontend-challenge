import React, { useCallback } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
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
  const handleDeleteNaver = useCallback(() => {
    console.log(id);
  }, []);

  const handleEditNaver = useCallback(() => {
    console.log(id);
  }, []);

  return (
    <Container>
      <img
        src="https://source.unsplash.com/random/800x800"
        alt="ProfileImage"
      />
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
