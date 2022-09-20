import PropTypes from 'prop-types';

import { Container, Card } from './style';

import Button from '../../button';

const petshops = [
  {
    nome: 'Cobasi 2',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 1,
  },
  {
    nome: 'Cobasi 3',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 2,
  },
  {
    nome: 'Cobasi 4',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 3,
  },
  {
    nome: 'Petz',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 4,
  },
  {
    nome: 'Petz 2',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 5,
  },
  {
    nome: 'Petz 5',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 6,
  },
  {
    nome: 'Cobasi 10',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 7,
  },
  {
    nome: 'PetMais',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 8,
  },
  {
    nome: 'PetMais sul',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 9,
  },
  {
    nome: 'PetMais sul',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 10,
  },
];

export default function PetshopsList({ zoneSelected, establishmentSelected }) {
  if (establishmentSelected === 'desmarcado') {
    return null;
  }

  if (establishmentSelected === '') {
    establishmentSelected = 'PetShop';
  }

  if (zoneSelected === '') {
    zoneSelected = 'Zona Sul';
  }

  const pets = petshops.filter((pet) => pet.zona === zoneSelected);

  return (
    <>
      <h1>PetShop:</h1>
      <Container>
        {pets.map((petshop) => (
          <Card key={petshop.key}>
            <div className="title-card">
              <span>{petshop.nome}</span>
            </div>
            <div className="data-card">
              <span><strong>{petshop.rua}</strong></span>
              <span><strong>{petshop.bairro}</strong></span>
              <span><strong>{petshop.zona}</strong></span>
              <span><strong>{petshop.telefone}</strong></span>
            </div>
            <div className="button-card">
              <Button>
                Agendar Banho
              </Button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
}

PetshopsList.propTypes = {
  establishmentSelected: PropTypes.string.isRequired,
  zoneSelected: PropTypes.string.isRequired,
};
