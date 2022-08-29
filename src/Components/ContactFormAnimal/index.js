import PropTypes from 'prop-types';
import { Card, FormArea, ButtonArea } from './style';

import FormGroup from '../FormGroup/index';
import Input from '../../input';
import Button from '../../button';

export default function ContactFormAnimal({ titleLabel, buttonLabel }) {
  return (
    <Card>
      <h1>{titleLabel}</h1>
      <form>
        <FormArea>
          <FormGroup>
            <span>Nome:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Espécie:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Raça:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Sexo:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Apelido:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Peso:</span>
            <Input />
          </FormGroup>
          <FormGroup>
            <span>Comprimento:</span>
            <Input />
          </FormGroup>
        </FormArea>

        <ButtonArea>
          <Button>{buttonLabel}</Button>
        </ButtonArea>
      </form>
    </Card>
  );
}

ContactFormAnimal.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
