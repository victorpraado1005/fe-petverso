import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  Container, TitleContainer, GridArea, Card,
} from './style';

import Loader from '../Loader';

import history from '../../history';

import Button from '../../button';
import Modal from '../Modal';
import AnimalsService from '../../services/AnimalsService';

export default function Animal() {
  const UserID = localStorage.getItem('UserID');
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [animalBeingDeleted, setAnimalBeingDeleted] = useState(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(UserID);

        setAnimals(AnimalsList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleDeleteAnimal(animal) {
    setAnimalBeingDeleted(animal);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setAnimalBeingDeleted(null);
  }

  async function handleConfirmDeleteAnimal() {
    try {
      await AnimalsService.deleteAnimal(animalBeingDeleted.id);

      setAnimals((prevState) => prevState.filter(
        (animal) => animal.id !== animalBeingDeleted.id,
      ));

      handleCloseDeleteModal();
    } catch {
      alert('Não foi possível excluir esse animal.');
    }
  }

  function handleVacinas() {
    history.push('/vacinas');
  }

  function handleMedicamentos() {
    history.push('/medicamentos');
  }

  function handleEditAnimal(id) {
    history.push(`/editAnimal/${id}`);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o animal "${animalBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteAnimal}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      <TitleContainer>
        <h1>Meus Animais:</h1>
        <Button>
          <Link to="/addAnimal">
            + Adicionar
          </Link>
        </Button>
      </TitleContainer>
      <GridArea>
        {animals.map((animal) => (
          <Card key={animal.id}>
            <div className="animal-name">
              <strong>{animal.name}</strong>
            </div>
            <div className="section-info">
              <div className="animal-info">
                <span>
                  Espécie:
                  {' '}
                  {animal.species}
                </span>
                <span>
                  Raça:
                  {' '}
                  {animal.breed}
                </span>
                <span>
                  Sexo:
                  {' '}
                  {animal.gender}
                </span>
              </div>

              <div className="button-details">
                <Button type="button" onClick={handleVacinas}>
                  Vacinas
                </Button>
                <Button type="button" onClick={handleMedicamentos}>
                  Medicamentos
                </Button>
                <Button type="button" className="btn-edit" onClick={() => handleEditAnimal(animal.id)}>
                  Editar
                </Button>
                <Button
                  type="button"
                  onClick={() => handleDeleteAnimal(animal)}
                >
                  Remover
                </Button>
              </div>
            </div>

          </Card>
        ))}
      </GridArea>
    </Container>
  );
}
