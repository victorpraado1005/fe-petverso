import { useState, useEffect } from 'react';

import history from '../../history';

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
    const url = 'https://petverso-production-f14e.up.railway.app/users/login';

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

    const response = await fetch(url, options);
    if (response.ok) {
      const userData = await response.json();
      const userID = userData.id;
      const userName = userData.name;
      localStorage.setItem('UserID', userID);
      localStorage.setItem('UserName', userName);
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
