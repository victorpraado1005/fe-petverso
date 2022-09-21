import { useEffect, useState } from 'react';

import {
  Container, UserData, CardAtividades, CardPlano, ContainerCard, TitleUserData,
  SubTitleUserData, AnimalsName,
  ButtonArea,
} from './style';

import UserService from '../../services/UserService';
import AnimalsService from '../../services/AnimalsService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';

export default function Assinatura() {
  const UserId = localStorage.getItem('UserID');
  const [userInfo, setUserInfo] = useState('');
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const userData = await UserService.getUserById(UserId);

        setUserInfo(userData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(UserId);

        setAnimalList(AnimalsList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <UserData>
          <TitleUserData>
            <h1>{userInfo.name}</h1>
          </TitleUserData>
          <SubTitleUserData>
            <h3>Informações:</h3>
            <div>
              <strong> E-mail: </strong>
              <span>{userInfo.email}</span>
            </div>
            <div>
              <strong> Telefone: </strong>
              <span>{userInfo.phone}</span>
            </div>
            <div>
              <strong> Gênero: </strong>
              <span>{userInfo.gender}</span>
            </div>
            <div>
              <strong> Endereço: </strong>
              <span>{userInfo.address}</span>
            </div>
            <div>
              <strong> Cidade: </strong>
              <span>{userInfo.city}</span>
            </div>
          </SubTitleUserData>
          <ButtonArea>
            <Button>Editar</Button>
          </ButtonArea>
          <SubTitleUserData>
            <h3>Assinatura:</h3>
            <div>
              <strong> Plano: </strong>
              <span>{userInfo.assinante}</span>
            </div>
            <div>
              <strong> Data da assinatura: </strong>
              <span>20/09/2022</span>
            </div>
            <div>
              <strong> Próxima cobrança: </strong>
              <span>20/10/2022</span>
            </div>
          </SubTitleUserData>
          <AnimalsName>
            <h3>Animais:</h3>
            {animalsList.map((animal) => (
              <span>
                {' '}
                -
                {' '}
                {animal.name}
              </span>
            ))}
          </AnimalsName>
        </UserData>
        <ContainerCard>
          <CardAtividades>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
          </CardAtividades>
          <CardPlano>
            <h1>Espaço reservado para o assinante: </h1>
          </CardPlano>
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
}
