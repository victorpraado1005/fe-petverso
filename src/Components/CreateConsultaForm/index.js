import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import {
  Container, FormArea, ButtonArea, InputArea, RowInputArea,
} from './style';

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

import ToastContainer from '../Toast/ToastContainer';
import toast from '../../utils/toast';

export default function VaccineForm() {
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, sethoraConsulta] = useState('');
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { clinica } = useParams();
  const { data } = useContext(Context);
  const [animalId, setAnimalId] = useState('');

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(data.user.id);

        setAnimalList(AnimalsList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleDataConsultaChange(event) {
    setDataConsulta(event.target.value);
  }

  function handleHoraConsultaChange(event) {
    sethoraConsulta(event.target.value);
  }

  function handleOptionClickListAnimal(animal) {
    setAnimalId(animal.id);
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
      return alert('Selecionar o animal para a consulta');
    }

    try {
      const consultaData = {
        data_consulta: dataConsulta,
        hora_consulta: horaConsulta,
        clinica,
        animal_id: animalId,
        users_id: data.user.id,
      };
      await ConsultaService.createConsulta(consultaData);
      history.push('/porperto');
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao agendar a consulta',
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
        <h1>Agendar Consulta</h1>
        <FormArea>
          <FormGroup error={getErrorMessageByFieldName('data_consulta')}>
            <Input
              type="date"
              error={getErrorMessageByFieldName('data_consulta')}
              value={dataConsulta}
              onChange={handleDataConsultaChange}
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName('hora_consulta')}>
            <Input
              type="time"
              min="09:00"
              max="18:00"
              step="900"
              error={getErrorMessageByFieldName('hora_consulta')}
              value={horaConsulta}
              onChange={handleHoraConsultaChange}
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
