import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  Container, TitleContainer, GridArea, Card,
} from './style';

import Button from '../../button';
import Loader from '../Loader';
import AnimalsService from '../../services/AnimalsService';

export default function AnimalHome() {
  const UserID = localStorage.getItem('UserID');
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(UserID);

        setAnimals(AnimalsList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <TitleContainer>
        <h1>Meus Animais:</h1>
        <Button>
          <Link to="/addAnimal">
            + Adicionar
          </Link>
        </Button>
      </TitleContainer>
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
              <Button type="button">
                <Link to={`/editAnimal/${animal.id}`}>
                  Detalhes
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </GridArea>
    </Container>
  );
}
