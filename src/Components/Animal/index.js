import { useState, useEffect } from 'react';

import { Container, GridArea, Card } from './style';

import Button from '../../button';

export default function Animal() {
  const UserID = localStorage.getItem('UserID');
  const [animals, setAnimals] = useState([]);

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
    <Container>
      <h1>Meus Animais:</h1>
      <GridArea>
        {animals.map((animal) => (
          <Card key={animal.id}>
            <div className="animal-name">
              <strong>{animal.name}</strong>
            </div>
            <div className="animal-info">
              <span>
                Espécie:
                {' '}
                {animal.species}
              </span>
              <span>
                Raça:
                {' '}
                {animal.breed}
              </span>
              <span>
                Sexo:
                {' '}
                {animal.gender}
              </span>
            </div>
            <div className="button-details">
              <Button type="button">Detalhes</Button>
            </div>
          </Card>
        ))}
      </GridArea>
    </Container>
  );
}
