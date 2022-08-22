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

  async function handleLogin(email, password) {
  // adicionar a logica de login aqui
    const url = 'http://localhost:3001/users/login';

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

    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const userData = await response.json();
        const userID = userData.id;
        const userName = userData.name;
        localStorage.setItem('UserID', userID);
        localStorage.setItem('UserName', userName);
        setAuthenticated(true);
        history.push('/home');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('UserID');
    localStorage.removeItem('UserName');
    history.push('/');
  }

  return { authenticated, handleLogin, handleLogout };
}
