import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MedicationService from '../../services/MedicationService';

import history from '../../history';

import { Container, FormArea, ButtonArea } from './style';

import formatData from '../../utils/formatData';

import useErrors from '../../hooks/useErros';

import FormGroup from '../FormGroup';
import Input from '../../input';
import Select from '../../select';
import Button from '../../button';

import arrowLeft from '../../assets/images/left-arrow.png';

export default function VaccineForm() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [repetition, setRepetition] = useState('');
  const { id } = useParams();

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleStartDate(event) {
    setStartDate(formatData(event.target.value));
  }

  function handleEndDate(event) {
    setEndDate(formatData(event.target.value));
  }

  async function handleCreateVaccine() {
    removeAllErrors();

    if (!name) {
      return setError({ field: 'name', message: 'Preencher campo de nome da medicação' });
    }

    if (!startDate) {
      return setError({ field: 'data_inicio', message: 'Preencher campo da data de início da medicação' });
    }

    console.log({
      name, startDate, endDate, repetition, id,
    });

    try {
      const medicationData = {
        medicine_name: name,
        start_date: startDate,
        end_date: endDate,
        repetition,
        animal_id: id,
      };

      await MedicationService.createMedication(medicationData);
      history.push(`/medicamentos/${id}`);
    } catch {
      alert('Ocorreu um erro ao cadastrar a vacina');
    }
  }

  return (
    <Container>
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
          <Input
            placeholder="Data de Início (DD/MM/AAAA)"
            error={getErrorMessageByFieldName('data_inicio')}
            value={startDate}
            onChange={handleStartDate}
            maxLength="10"
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Data de Término (DD/MM/AAAA)"
            value={endDate}
            onChange={handleEndDate}
            maxLength="10"
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
