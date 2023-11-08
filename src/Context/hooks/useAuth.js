import { useState, useEffect } from 'react';

import history from '../../history';

const url = process.env.REACT_APP_API_URL;

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('UserId');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  async function login(email, password) {
  // adicionar a logica de login aqui
    const finalUrl = `${url}/users/login`;

    const infoLogin = {
      email,
      password,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infoLogin),
    };

    const response = await fetch(finalUrl, options);
    if (response.ok) {
      const { id, name, accessToken } = await response.json();
      localStorage.setItem('UserID', id);
      localStorage.setItem('UserName', name);
      localStorage.setItem('accessToken', accessToken);
      setAuthenticated(true);
      history.push('/home');
    }

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('UserID');
    localStorage.removeItem('UserName');
    history.push('/');
  }

  return { authenticated, login, handleLogout };
}
