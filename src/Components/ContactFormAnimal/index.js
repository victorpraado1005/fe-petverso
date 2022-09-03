import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card, FormArea, ButtonArea,
} from './style';
import useErrors from '../../hooks/useErros';

import FormGroup from '../FormGroup/index';

import Input from '../../input';
import Button from '../../button';
import Select from '../../select';

import arrowLeft from '../../assets/images/left-arrow.png';

export default function ContactFormAnimal({ titleLabel, buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [nickName, setNickName] = useState('');
  const [weigth, setWeight] = useState('');
  const [lenght, setLenght] = useState('');
  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'nome', message: 'Preencher campo de nome' });
    } else {
      removeError('breed');
    }
  }

  function handleBreedChange(event) {
    setBreed(event.target.value);

    if (!event.target.value) {
      setError({ field: 'breed', message: 'Preencher campo de raça' });
    } else {
      removeError('breed');
    }
  }

  function handleNickNameChange(event) {
    setNickName(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleLenghthange(event) {
    setLenght(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!species) {
      return console.log('Preencher campo de especie');
    }

    if (!gender) {
      return console.log('Preencher campo de genero');
    }

    if (errors.length > 0) {
      return;
    }

    onSubmit({
      name, breed, species, nickName, weigth, lenght, gender,
    });
  }

  return (
    <Card>
      <Link to="/home">
        <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
      </Link>
      <h1>{titleLabel}</h1>
      <form onSubmit={handleSubmit}>
        <FormArea>
          <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
              error
              value={name}
              placeholder="Nome"
              onChange={handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Select
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            >
              <option value="">Espécie</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gatpo</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Input
              error={getErrorMessageByFieldName('breed')}
              value={breed}
              placeholder="Raça"
              onChange={handleBreedChange}
            />
          </FormGroup>
          <FormGroup>
            <Select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Sexo</option>
              <option value="Macho">Macho</option>
              <option value="Femea">Fêmea</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Apelido"
              value={nickName}
              onChange={handleNickNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Peso"
              value={weigth}
              onChange={handleWeightChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Comprimento"
              value={lenght}
              onChange={handleLenghthange}
            />
          </FormGroup>
        </FormArea>

        <ButtonArea>
          <Button type="submit">{buttonLabel}</Button>
        </ButtonArea>
      </form>
    </Card>
  );
}

ContactFormAnimal.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
