import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Container, FormArea, ButtonArea, InputArea, RowInputArea,
} from './style';

import formatData from '../../utils/formatData';

import ConsultaService from '../../services/ConsultaService';
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

export default function VaccineForm() {
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, sethoraConsulta] = useState('');
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { clinica } = useParams();
  const UserId = localStorage.getItem('UserID');
  let animalId = '';

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

  function handleDataConsultaChange(event) {
    setDataConsulta(formatData(event.target.value));
  }

  function handleHoraConsultaChange(event) {
    sethoraConsulta(event.target.value);
  }

  function handleOptionClickListAnimal(animal) {
    animalId = animal.id;
  }

  async function handleCreateConsulta() {
    removeAllErrors();

    if (!dataConsulta) {
      return setError({ field: 'data_consulta', message: 'Preencher o campo com a data da consulta' });
    }

    if (!horaConsulta) {
      return setError({ field: 'hora_consulta', message: 'Preencher o campo com a hora da consulta' });
    }

    if (!animalId) {
      alert('Selecionar o animal para a consulta');
    }

    try {
      const consultaData = {
        data_consulta: dataConsulta,
        hora_consulta: horaConsulta,
        clinica,
        animal_id: animalId,
        users_id: UserId,
      };
      await ConsultaService.createConsulta(consultaData);
      history.push('/porperto');
    } catch {
      alert('Ocorreu um erro ao agendar a consulta');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <Link to="/porperto">
          <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
        </Link>
        <h1>Agendar Consulta</h1>
        <FormArea>
          <FormGroup error={getErrorMessageByFieldName('data_consulta')}>
            <Input
              placeholder="Data da Consulta (DD/MM/AAAA)"
              error={getErrorMessageByFieldName('data_consulta')}
              value={dataConsulta}
              onChange={handleDataConsultaChange}
              maxLength="10"
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName('hora_consulta')}>
            <Input
              placeholder="Hora da consulta (HH:MM)"
              error={getErrorMessageByFieldName('hora_consulta')}
              value={horaConsulta}
              onChange={handleHoraConsultaChange}
              maxLength="5"
            />
          </FormGroup>
          <InputArea>
            {animalsList.map((animal) => (
              <RowInputArea key={animal.id}>
                <input type="radio" name="animal" value={animal.name} onClick={() => handleOptionClickListAnimal(animal)} />
                <span>{animal.name}</span>
              </RowInputArea>
            ))}
          </InputArea>
          <ButtonArea>
            <Button
              type="button"
              onClick={handleCreateConsulta}
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
