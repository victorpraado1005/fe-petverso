import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import AnimalsService from '../../services/AnimalsService';
import Loader from '../Loader';

import { CardHome } from '../../pages/Home/style';

import { TitleContainer, ListAnimalsContainer } from './style';

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

  function handleEditAnimal(id) {
    history.push(`/editAnimal/${id}`);
  }

  return (
    <CardHome>
      <Loader isLoading={isLoading} />
      <TitleContainer>
        <h1>Meus Animais:</h1>
        <div className="button-area">
          <Button onClick={() => history.push('/animals')}>Ver todos</Button>
          <Button onClick={() => history.push('/addAnimal')}>+ Adicionar</Button>
        </div>
      </TitleContainer>
      <ListAnimalsContainer>
        {animals.map((animal) => (
          <div className="data-animal" key={animal.id}>
            <h1>
              -
              {' '}
              {animal.name}
            </h1>
            <Button onClick={() => handleEditAnimal(animal.id)}>Editar</Button>
          </div>
        ))}
      </ListAnimalsContainer>
    </CardHome>
  );
}
