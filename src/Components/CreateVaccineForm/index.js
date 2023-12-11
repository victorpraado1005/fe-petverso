import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Container, FormArea, ButtonArea } from './style';

import VaccineService from '../../services/VaccineService';

import useErrors from '../../hooks/useErros';

import FormGroup from '../FormGroup';
import Input from '../../input';
import Button from '../../button';

import arrowLeft from '../../assets/images/left-arrow.png';

import ToastContainer from '../Toast/ToastContainer';
import toast from '../../utils/toast';

export default function VaccineForm() {
  const [name, setName] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [nextApplicationDate, setNextApplicationDate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleApplicationDateChange(event) {
    setApplicationDate(event.target.value);
  }

  function handleNextApplicationDateChange(event) {
    setNextApplicationDate(event.target.value);
  }

  async function handleCreateVaccine() {
    removeAllErrors();

    if (!name) {
      return setError({ field: 'name', message: 'Preencher campo de nome da vacina' });
    }

    if (!applicationDate) {
      return setError({ field: 'data_aplicacao', message: 'Preencher campo da data de aplicação da vacina' });
    }

    try {
      let AuxNextApplicationDate = null;
      if (nextApplicationDate) {
        AuxNextApplicationDate = nextApplicationDate;
      }
      const vaccineData = {
        name,
        application_date: applicationDate,
        next_application: AuxNextApplicationDate,
        animal_id: id,
      };
      await VaccineService.createVaccine(vaccineData);
      navigate(`/vacinas/${id}`);
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar a vacina',
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Link to={`/vacinas/${id}`}>
        <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
      </Link>
      <h1>Criar Vacina</h1>
      <FormArea>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            placeholder="Nome da Vacina"
            error={getErrorMessageByFieldName('name')}
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('data_aplicacao')}>
          <h5>Data da Aplicação</h5>
          <Input
            type="date"
            error={getErrorMessageByFieldName('data_aplicacao')}
            value={applicationDate}
            onChange={handleApplicationDateChange}
          />
        </FormGroup>
        <FormGroup>
          <h5>Proxima Aplicação</h5>
          <Input
            type="date"
            value={nextApplicationDate}
            onChange={handleNextApplicationDateChange}
          />
        </FormGroup>

        <ButtonArea>
          <Button
            type="button"
            onClick={handleCreateVaccine}
          >
            Criar Vacina
          </Button>
        </ButtonArea>
      </FormArea>
    </Container>
  );
}
