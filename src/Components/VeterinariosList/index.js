import PropTypes from 'prop-types';

import { Container, Card } from './style';

import Button from '../../button';

import history from '../../history';

const clinicas = [
  {
    nome: 'Clinica 1',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 1,
  },
  {
    nome: 'Clinica 1',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 2,
  },
  {
    nome: 'Clinica 3',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 3,
  },
  {
    nome: 'Clinica 4',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 4,
  },
  {
    nome: 'Clinica 5',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 5,
  },
  {
    nome: 'Clinica 6',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Norte',
    key: 6,
  },
  {
    nome: 'Clinica 7',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Leste',
    key: 7,
  },
  {
    nome: 'Clinica 8',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Oeste',
    key: 8,
  },
  {
    nome: 'Clinica 9',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 9,
  },
  {
    nome: 'Clinica 10',
    rua: 'Rua Sousa ramos, 320',
    bairro: 'Aclimação',
    telefone: '(11) 95038-9492',
    zona: 'Zona Sul',
    key: 10,
  },
];

export default function VeterinariosList({ zoneSelected, establishmentSelected }) {
  if (establishmentSelected === 'desmarcado') {
    return null;
  }

  if (establishmentSelected === '') {
    establishmentSelected = 'Veterinario';
  }

  if (zoneSelected === '') {
    zoneSelected = 'Zona Sul';
  }

  const clinica = clinicas.filter((pet) => pet.zona === zoneSelected);

  function handleConsulta(nameClinica) {
    history.push(`/addconsulta/${nameClinica}`);
  }

  return (
    <>
      <h1>Clínica Veterinária:</h1>
      <Container>
        {clinica.map((veterinario) => (
          <Card key={veterinario.key}>
            <div className="title-card">
              <span>{veterinario.nome}</span>
            </div>
            <div className="data-card">
              <span><strong>{veterinario.rua}</strong></span>
              <span><strong>{veterinario.bairro}</strong></span>
              <span><strong>{veterinario.zona}</strong></span>
              <span><strong>{veterinario.telefone}</strong></span>
            </div>
            <div className="button-card">
              <Button onClick={() => handleConsulta(veterinario.nome)}>
                Agendar Consulta
              </Button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
}

VeterinariosList.propTypes = {
  establishmentSelected: PropTypes.string.isRequired,
  zoneSelected: PropTypes.string.isRequired,
};
