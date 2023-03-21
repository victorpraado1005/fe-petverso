import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Container, FormArea, ButtonArea, InputArea, RowInputArea,
} from './style';

import BanhoService from '../../services/BanhoService';
import AnimalsService from '../../services/AnimalsService';

import useErrors from '../../hooks/useErros';

import history from '../../history';

import Header from '../Header';
import Footer from '../Footer';

import FormGroup from '../FormGroup';
import Input from '../../input';
import Button from '../../button';
import Loader from '../Loader';

import arrowLeft from '../../assets/images/left-arrow.png';

import ToastContainer from '../Toast/ToastContainer';
import toast from '../../utils/toast';

export default function VaccineForm() {
  const [dataBanho, setDataBanho] = useState('');
  const [horaBanho, setHoraBanho] = useState('');
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { petshop } = useParams();
  const UserId = localStorage.getItem('UserID');
  const [animalId, setAnimalId] = useState('');

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

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

  function handleDataBanhoChange(event) {
    setDataBanho(event.target.value);
  }

  function handleHoraBanhoChange(event) {
    setHoraBanho(event.target.value);
  }

  function handleOptionClickListAnimal(animal) {
    setAnimalId(animal.id);
  }

  async function handleCreateBanho() {
    removeAllErrors();
    // const myArray = dataBanho.split('-');
    // const dataFormatada = myArray[2] + '-' + myArray[1] + '-' + myArray[0];

    if (!dataBanho) {
      return setError({ field: 'data_banho', message: 'Preencher o campo com a data do banho' });
    }

    if (!horaBanho) {
      return setError({ field: 'hora_banho', message: 'Preencher o campo com a hora do banho' });
    }

    if (!animalId) {
      return alert('Selecionar o animal para o banho');
    }

    try {
      const banhoData = {
        data_banho: dataBanho,
        hora_banho: horaBanho,
        petshop,
        animal_id: animalId,
        users_id: UserId,
      };
      await BanhoService.createBanho(banhoData);
      history.push('/porperto');
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao agendar o Banho.',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <ToastContainer />
      <Header />
      <Container>
        <Link to="/porperto">
          <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
        </Link>
        <h1>Agendar Banho</h1>
        <FormArea>
          <FormGroup error={getErrorMessageByFieldName('data_banho')}>
            <Input
              type="date"
              error={getErrorMessageByFieldName('data_banho')}
              value={dataBanho}
              onChange={handleDataBanhoChange}
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName('hora_banho')}>
            <Input
              type="time"
              min="09:00"
              max="18:00"
              step="900"
              error={getErrorMessageByFieldName('hora_banho')}
              value={horaBanho}
              onChange={handleHoraBanhoChange}
            />
          </FormGroup>
          <InputArea>
            {animalsList.map((animal) => (
              <RowInputArea key={animal.id}>
                <input type="radio" name="animal" onClick={() => handleOptionClickListAnimal(animal)} />
                <span>{animal.name}</span>
              </RowInputArea>
            ))}
          </InputArea>
          <ButtonArea>
            <Button
              type="button"
              onClick={handleCreateBanho}
            >
              Agendar
            </Button>
          </ButtonArea>
        </FormArea>
      </Container>
      <Footer />
    </>
  );
}
