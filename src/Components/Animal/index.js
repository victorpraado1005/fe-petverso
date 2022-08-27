import { useState, useEffect } from 'react';

export default function Animal() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    (async () => {
      const UserId = localStorage.getItem('UserID');
      const url = `https://api-petverso.herokuapp.com/users/animals/${UserId}`;

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
    <ul>
      {animals.map((animal) => (
        <li key={animal.id}>{animal.name}</li>
      ))}
    </ul>
  );
}
