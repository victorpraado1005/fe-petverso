import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import AnimalsService from '../../services/AnimalsService';
import Loader from '../Loader';

// import { CardHome } from '../../pages/Home/style';

import {
  Container, HeaderContainer, ListAnimalsContainer, CardAnimalName,
} from './style';

import Button from '../../button';

import history from '../../history';

export default function MeusAnimaisHome() {
  const { data } = useContext(Context);
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(data.user.id);
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
      <HeaderContainer>
        <h1>Meus Animais:</h1>
        <Button onClick={() => history.push('/animals')}>Ver todos</Button>
      </HeaderContainer>
      <ListAnimalsContainer>
        {animals.map((animal) => (
          <CardAnimalName key={animal.id}>
            <h1>
              {animal.name}
            </h1>
          </CardAnimalName>
        ))}
      </ListAnimalsContainer>
    </Container>
  );
}
