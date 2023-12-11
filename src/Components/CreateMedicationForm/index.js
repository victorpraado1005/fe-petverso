import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MedicationService from '../../services/MedicationService';

import { Container, FormArea, ButtonArea } from './style';

import useErrors from '../../hooks/useErros';

import FormGroup from '../FormGroup';
import Input from '../../input';
import Select from '../../select';
import Button from '../../button';

import arrowLeft from '../../assets/images/left-arrow.png';

import ToastContainer from '../Toast/ToastContainer';
import toast from '../../utils/toast';

export default function VaccineForm() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [repetition, setRepetition] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleStartDate(event) {
    setStartDate(event.target.value);
  }

  function handleEndDate(event) {
    setEndDate(event.target.value);
  }

  async function handleCreateVaccine() {
    removeAllErrors();

    if (!name) {
      return setError({ field: 'name', message: 'Preencher campo de nome da medicação' });
    }

    if (!startDate) {
      return setError({ field: 'data_inicio', message: 'Preencher campo da data de início da medicação' });
    }

    try {
      let AuxEndDate = null;

      if (endDate) {
        AuxEndDate = endDate;
      }

      const medicationData = {
        medicine_name: name,
        start_date: startDate,
        end_date: AuxEndDate,
        repetition,
        animal_id: id,
      };

      await MedicationService.createMedication(medicationData);
      navigate(`/medicamentos/${id}`);
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar a medicação',
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Link to={`/medicamentos/${id}`}>
        <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
      </Link>
      <h1>Criar Medicação</h1>
      <FormArea>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            placeholder="Nome do Remédio"
            error={getErrorMessageByFieldName('name')}
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('data_inicio')}>
          <h5>Data de Inicio</h5>
          <Input
            type="date"
            error={getErrorMessageByFieldName('data_inicio')}
            value={startDate}
            onChange={handleStartDate}
          />
        </FormGroup>
        <FormGroup>
          <h5>Data de Término</h5>
          <Input
            type="date"
            value={endDate}
            onChange={handleEndDate}
          />
        </FormGroup>
        <FormGroup>
          <Select
            value={repetition}
            onChange={(event) => setRepetition(event.target.value)}
          >
            <option value="">Repetição</option>
            <option value="Diário">Diário</option>
            <option value="A cada 3 dias">A cada 3 dias</option>
            <option value="A cada 5 dias">A cada 5 dias</option>
            <option value="Semanal">Semanal</option>
            <option value="A cada 15 dias">A cada 15 dias</option>
            <option value="Mensal">Mensal</option>
          </Select>
        </FormGroup>
        <ButtonArea>
          <Button
            type="submit"
            onClick={handleCreateVaccine}
          >
            Criar Medicação
          </Button>
        </ButtonArea>
      </FormArea>
    </Container>
  );
}
