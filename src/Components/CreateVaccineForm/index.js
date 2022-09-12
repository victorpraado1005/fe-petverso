import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container, FormArea, ButtonArea } from './style';

import formatData from '../../utils/formatData';

import useErrors from '../../hooks/useErros';

import FormGroup from '../FormGroup';
import Input from '../../input';
import Button from '../../button';

import arrowLeft from '../../assets/images/left-arrow.png';

export default function VaccineForm() {
  const [name, setName] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [nextApplicationDate, setNextApplicationDate] = useState('');
  const { id } = useParams();

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleApplicationDateChange(event) {
    setApplicationDate(formatData(event.target.value));
  }

  function handleNextApplicationDateChange(event) {
    setNextApplicationDate(formatData(event.target.value));
  }

  function handleCreateVaccine() {
    removeAllErrors();

    if (!name) {
      return setError({ field: 'name', message: 'Preencher campo de nome da vacina' });
    }

    if (!applicationDate) {
      return setError({ field: 'data_aplicacao', message: 'Preencher campo da data de aplicação da vacina' });
    }

    console.log({
      name, applicationDate, nextApplicationDate, id,
    });
  }

  return (
    <Container>
      <Link to="/animals">
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
          <Input
            placeholder="Data da Aplicação (DD/MM/AAAA)"
            error={getErrorMessageByFieldName('data_aplicacao')}
            value={applicationDate}
            onChange={handleApplicationDateChange}
            maxLength="10"
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Próxima Aplicação (DD/MM/AAAA)"
            value={nextApplicationDate}
            onChange={handleNextApplicationDateChange}
            maxLength="10"
          />
        </FormGroup>

        <ButtonArea>
          <Button
            type="submit"
            onClick={handleCreateVaccine}
          >
            Criar Vacina
          </Button>
        </ButtonArea>
      </FormArea>
    </Container>
  );
}
