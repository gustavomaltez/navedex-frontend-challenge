import { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useModal } from './modal';
import convertDate from '../utils/convertDateWithTimeZoneToDate';
import formatDateToPtBrDate from '../utils/formatDateToPtBrDate';
import { useToast } from './toast';

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
  confirmDeleteNaver: (id: string) => Promise<void>;
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
  const { addToast } = useToast();

  const addNaver = useCallback(
    async ({
      admission_date,
      birthdate,
      job_role,
      name,
      project,
      url,
    }: Omit<NaverInfosProps, 'id' | 'user_id'>) => {
      try {
        const response = await api.post('/navers/', {
          admission_date: formatDateToPtBrDate(admission_date),
          birthdate: formatDateToPtBrDate(birthdate),
          job_role,
          name,
          project,
          url,
        });
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
        addToast({
          type: 'error',
          title: 'Erro ao adicionar naver',
          description:
            'Ocorreu um erro ao tentar adicionar esse naver, tente novamente. Verifique os campos.',
        });
      }
    },
    [history, openModal, addToast],
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
        addToast({
          type: 'error',
          title: 'Erro ao buscar naver',
          description:
            'Ocorreu um erro ao tentar obter as informações desse naver. Verifique os campos.',
        });
        return {} as NaverInfosProps;
      }
    },
    [addToast],
  );

  const confirmDeleteNaver = useCallback(
    async (id: string): Promise<void> => {
      try {
        await api.delete(`/navers/${id}`);
        openModal({
          title: 'Naver excluído',
          text: 'Naver excluído com sucesso!',
        });

        setNaversList(oldState => oldState.filter(naver => naver.id !== id));
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao deletar naver',
          description:
            'Ocorreu um erro ao tentar deletar esse naver, tente novamente.',
        });
      }
    },
    [addToast, openModal],
  );

  const deleteNaver = useCallback(
    async (id: string) => {
      openModal({
        title: 'Excluir Naver',
        text: 'Tem certeza que deseja excluir este Naver?',
        okButtonLabel: 'Excluir',
        onConfirmAction: () => {
          confirmDeleteNaver(id);
        },
      });
    },
    [openModal, confirmDeleteNaver],
  );

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
        const response = await api.put(`/navers/${id}`, {
          admission_date: formatDateToPtBrDate(admission_date),
          birthdate: formatDateToPtBrDate(birthdate),
          job_role,
          name,
          project,
          url,
        });

        const editedNaver = response.data;

        const updatedNaversList = naversList.map(naver => {
          if (naver.id === id) {
            return editedNaver;
          }
          return naver;
        });

        setNaversList(updatedNaversList);
        openModal({
          title: 'Naver atualizado',
          text: 'Naver atualizado com sucesso',
          onCloseAction: () => {
            history.goBack();
          },
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao atualizar naver',
          description:
            'Ocorreu um erro ao tentar atualizar as informações desse naver.',
        });
      }
    },
    [history, openModal, addToast],
  );

  const updateNaverList = useCallback(async () => {
    try {
      const response = await api.get('/navers');
      setNaversList(response.data);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao obter navers',
        description:
          'Ocorreu um erro ao tentar obter a lista de navers. Recarregue a página.',
      });
    }
  }, [addToast]);

  return (
    <NaverContext.Provider
      value={{
        addNaver,
        deleteNaver,
        editNaver,
        updateNaverList,
        naversList,
        getNaverDetails,
        confirmDeleteNaver,
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
