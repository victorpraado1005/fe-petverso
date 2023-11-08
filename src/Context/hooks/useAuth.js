import { useState, useEffect } from 'react';

import history from '../../history';
import UserService from '../../services/UserService';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem('accessToken')) {
        return;
      }

      const { user } = await UserService.me();

      setUserInfo(user);
    })();
  }, []);

  async function login(email, password) {
  // adicionar a logica de login aqui
    const user = {
      email,
      password,
    };

    const response = await UserService.login(user);
    const { id, name, accessToken } = response;
    localStorage.setItem('UserID', id);
    localStorage.setItem('UserName', name);
    localStorage.setItem('accessToken', accessToken);
    setAuthenticated(true);
    history.push('/home');

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('UserID');
    localStorage.removeItem('UserName');
    localStorage.removeItem('accessToken');
    history.push('/');
  }

  return {
    authenticated, login, handleLogout, userInfo,
  };
}
