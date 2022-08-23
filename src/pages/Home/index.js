import { useContext, useEffect, useState } from 'react';

import { Context } from '../../Context/AuthContext';

export default function Home() {
  const UserName = localStorage.getItem('UserName');
  const { authenticated, handleLogout } = useContext(Context);
  const [animals, setAnimals] = useState([]);

  if (authenticated === true) {
    const UserId = localStorage.getItem('UserID');
    console.debug(UserId);
  }

  useEffect(() => {
    (async () => {
      const UserId = localStorage.getItem('UserID');
      const url = `http://localhost:3001/users/animals/${UserId}`;

      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const data = await response.json();
          setAnimals(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <h1>
        Bem vindo
        {' '}
        {UserName}
      </h1>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}
