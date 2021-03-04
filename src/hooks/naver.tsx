import { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useModal } from './modal';
import convertDate from '../utils/convertDateWithTimeZoneToDate';

export interface NaverInfosProps {
  id: string;
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
  getNaverDetails: (id: string) => Promise<NaverInfosProps>;
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
        console.log(error.response.data);
        alert('Erro ao atualizar naver!');
      }
    },
    [],
  );

  const getNaverDetails = useCallback(
    async (id: string): Promise<NaverInfosProps> => {
      try {
        const response = await api.get<NaverInfosProps>(`/navers/${id}`);

        const naverData = {
          id: response.data.id,
          job_role: response.data.job_role,
          admission_date: convertDate(response.data.admission_date),
          birthdate: convertDate(response.data.birthdate),
          project: response.data.project,
          name: response.data.name,
          url: response.data.url,
        };

        return naverData;
      } catch (error) {
        alert('Erro');
        return {} as NaverInfosProps;
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
      console.log(error.response.data);
      alert('Erro ao buscar navers');
    }
  }, []);

  return (
    <NaverContext.Provider
      value={{
        addNaver,
        deleteNaver,
        editNaver,
        updateNaverList,
        naversList,
        getNaverDetails,
      }}
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
