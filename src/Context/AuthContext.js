import { createContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import UserService from '../services/UserService';

import Loader from '../Components/Loader';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const { data, isFetching, refetch } = useQuery({
    queryKey: 'users/me',
    queryFn: () => UserService.me(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return (
      <Loader isLoading={isLoading} />
    );
  }

  async function login(email, password) {
    // adicionar a logica de login aqui
    const user = {
      email,
      password,
    };

    const response = await UserService.login(user);
    const { accessToken } = response;
    localStorage.setItem('accessToken', accessToken);
    refetch();
    setAuthenticated(true);
    navigate('/home');

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  return (
    <Context.Provider value={{
      authenticated, login, handleLogout, data, refetch,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
