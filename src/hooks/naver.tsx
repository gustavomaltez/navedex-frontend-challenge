import { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useModal } from './modal';

export interface NaverInfosProps {
  id: string;
  user_id: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

interface NaverContextData {
  addNaver: (data: Omit<NaverInfosProps, 'id' | 'user_id'>) => Promise<void>;
  deleteNaver: (id: string) => Promise<void>;
  editNaver: (data: Omit<NaverInfosProps, 'user_id'>) => Promise<void>;
  updateNaverList: () => Promise<void>;
  naversList: NaverInfosProps[];
}

const NaverContext = createContext({} as NaverContextData);

const NaverProvider: React.FC = ({ children }) => {
  const [naversList, setNaversList] = useState<NaverInfosProps[]>([]);

  const { openModal } = useModal();
  const history = useHistory();

  const addNaver = useCallback(
    async (data: Omit<NaverInfosProps, 'id' | 'user_id'>) => {
      try {
        const response = await api.post('/navers/', data);
        const newNaver = response.data;
        openModal({
          title: 'Naver criado',
          text: 'Naver criado com sucesso',
          onCloseAction: () => {
            history.goBack();
          },
        });

        setNaversList(oldState => [...oldState, newNaver]);
      } catch (error) {
        alert('Erro ao atualizar naver!');
      }
    },
    [],
  );

  const deleteNaver = useCallback(async (id: string) => {
    async function confirmDeleteNaver() {
      try {
        await api.delete(`/navers/${id}`);
        openModal({
          title: 'Naver excluído',
          text: 'Naver excluído com sucesso!',
        });

        setNaversList(oldState => oldState.filter(naver => naver.id !== id));
      } catch (error) {
        alert('Erro ao deletar Naver!');
      }
    }

    openModal({
      title: 'Excluir Naver',
      text: 'Tem certeza que deseja excluir este Naver?',
      okButtonLabel: 'Excluir',
      onConfirmAction: confirmDeleteNaver,
    });
  }, []);

  const editNaver = useCallback(
    async ({
      id,
      admission_date,
      birthdate,
      job_role,
      name,
      project,
      url,
    }: Omit<NaverInfosProps, 'user_id'>) => {
      try {
        await api.put(`/navers/${id}`, {
          admission_date,
          birthdate,
          job_role,
          name,
          project,
          url,
        });
        openModal({
          title: 'Naver atualizado',
          text: 'Naver atualizado com sucesso',
          onCloseAction: () => {
            history.goBack();
          },
        });
      } catch (error) {
        alert('Erro ao atualizar naver!');
      }
    },
    [],
  );

  const updateNaverList = useCallback(async () => {
    try {
      const response = await api.get('/navers');
      setNaversList(response.data);
    } catch (error) {
      alert('Erro ao buscar navers');
    }
  }, []);

  return (
    <NaverContext.Provider
      value={{ addNaver, deleteNaver, editNaver, updateNaverList, naversList }}
    >
      {children}
    </NaverContext.Provider>
  );
};

function useNaver(): NaverContextData {
  const context = useContext(NaverContext);

  if (!context) {
    throw new Error('useNaver must be used within an NaverProvider');
  }

  return context;
}

export { NaverProvider, useNaver };