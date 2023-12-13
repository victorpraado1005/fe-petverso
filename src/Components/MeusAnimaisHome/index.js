import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import AnimalsService from '../../services/AnimalsService';
import Loader from '../Loader';

import {
  Container, HeaderContainer, ListAnimalsContainer, CardAnimalName,
} from './style';

import Button from '../../button';

export default function MeusAnimaisHome() {
  const { data } = useContext(Context);
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
        <Button onClick={() => navigate('/animals')}>Ver todos</Button>
      </HeaderContainer>
      <ListAnimalsContainer>
        {animals.map((animal) => (
          <CardAnimalName key={animal.id}>
            <h1>
              {animal.name}
            </h1>
            <div className="btn-edit-animal">
              <Button onClick={() => navigate(`/editAnimal/${animal.id}`)}>Editar</Button>
            </div>
          </CardAnimalName>
        ))}
      </ListAnimalsContainer>
    </Container>
  );
}
