import PropTypes from 'prop-types';

import { Container, Card } from './style';

import Button from '../../button';

const parques = [
  {
    nome: 'Parque da Aclimação 7',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 1,
  },
  {
    nome: 'Parque da Aclimação 8',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 2,
  },
  {
    nome: 'Parque da Aclimação 9',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 3,
  },
  {
    nome: 'Parque da Aclimação 10',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 4,
  },
  {
    nome: 'Parque da Aclimação 1',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 5,
  },
  {
    nome: 'Parque da Aclimação 2',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 6,
  },
  {
    nome: 'Parque da Aclimação 3',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 7,
  },
  {
    nome: 'Parque da Aclimação 4',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 8,
  },
  {
    nome: 'Parque da Aclimação 5',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 9,
  },
  {
    nome: 'Parque da Aclimação 6',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 10,
  },
];

export default function ParquesList({ zoneSelected, establishmentSelected }) {
  if (establishmentSelected === 'desmarcado') {
    return null;
  }

  if (establishmentSelected === '') {
    establishmentSelected = 'Parques';
  }

  if (zoneSelected === '') {
    zoneSelected = 'Zona Sul';
  }

  const parque = parques.filter((pet) => pet.zona === zoneSelected);

  return (
    <>
      <h1>Parques:</h1>
      <Container>
        {parque.map((park) => (
          <Card key={park.key}>
            <div className="title-card">
              <span>{park.nome}</span>
            </div>
            <div className="data-card">
              <span><strong>{park.rua}</strong></span>
              <span><strong>{park.bairro}</strong></span>
              <span><strong>{park.zona}</strong></span>
              <span><strong>{park.telefone}</strong></span>
            </div>
            <div className="button-card">
              <Button>
                Ver Avaliações
              </Button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
}

ParquesList.propTypes = {
  establishmentSelected: PropTypes.string.isRequired,
  zoneSelected: PropTypes.string.isRequired,
};
