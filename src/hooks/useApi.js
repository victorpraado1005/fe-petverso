import { useState, useEffect } from 'react';

export default function useApi() {
  const [animals, setAnimals] = useState([]);

  function getAnimalNameByUserId(UserID) {
    useEffect(() => {
      (async () => {
        const url = `https://api-petverso.herokuapp.com/users/animals/${UserID}`;

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

  return { getAnimalNameByUserId };
}
