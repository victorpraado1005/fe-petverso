import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import {
  Container, TitleContainer, GridArea, Card,
} from './style';

import trash from '../../assets/images/trash.png';
import edit from '../../assets/images/edit.svg';

import Loader from '../Loader';

import Button from '../../button';
import Modal from '../Modal';
import AnimalsService from '../../services/AnimalsService';
import BanhoService from '../../services/BanhoService';
import ConsultaService from '../../services/ConsultaService';
import VaccineService from '../../services/VaccineService';
import MedicationService from '../../services/MedicationService';

export default function Animal() {
  const { data } = useContext(Context);
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [animalBeingDeleted, setAnimalBeingDeleted] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(data.user.id);

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
      setIsLoading(true);
      await BanhoService.deleteBanhoByAnimalId(animalBeingDeleted.id);
      await ConsultaService.deleteConsultaByAnimalId(animalBeingDeleted.id);
      await VaccineService.deleteVaccineByAnimalId(animalBeingDeleted.id);
      await MedicationService.deleteMedicationByAnimalId(animalBeingDeleted.id);
      await AnimalsService.deleteAnimal(animalBeingDeleted.id);

      setAnimals((prevState) => prevState.filter(
        (animal) => animal.id !== animalBeingDeleted.id,
      ));

      handleCloseDeleteModal();
    } catch {
      alert('Não foi possível excluir esse animal.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleVacinas(id) {
    navigate(`/vacinas/${id}`);
  }

  function handleAgendamentos() {
    navigate('/agendamentos');
  }

  function handleMedicamentos(id) {
    navigate(`/medicamentos/${id}`);
  }

  function handleEditAnimal(id) {
    navigate(`/editAnimal/${id}`);
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
        <p>Iremos deletar todas as informações atreladas a esse animal.</p>
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      <TitleContainer>
        <h1>
          Meus Animais
          (
          {animals.length}
          )
        </h1>
        <Button onClick={() => navigate('/addAnimal')}>+ Adicionar</Button>
      </TitleContainer>
      <GridArea>
        {animals.map((animal) => (
          <Card key={animal.id}>
            <div className="title-container">
              <strong>{animal.name}</strong>
              <div className="title-button">
                <Button type="button" className="btn-edit" onClick={() => handleEditAnimal(animal.id)}>
                  <img width="25px" height="25px" src={edit} alt="Editar" />
                </Button>
                <Button
                  type="button"
                  onClick={() => handleDeleteAnimal(animal)}
                  className="delete-button"
                >
                  <img width="30px" height="30px" src={trash} alt="Remover" />
                </Button>
              </div>
            </div>
            <div className="section-info">
              <div className="animal-info">
                <span>
                  <strong>
                    Espécie:
                  </strong>
                  {' '}
                  {animal.species}
                </span>
                <span>
                  <strong>
                    Raça:
                  </strong>
                  {' '}
                  {animal.breed}
                </span>
                <span>
                  <strong>
                    Sexo:
                  </strong>
                  {' '}
                  {animal.gender}
                </span>
              </div>
              <div className="button-details">
                <Button type="button" onClick={() => handleAgendamentos()}>
                  Agendamentos
                </Button>
                <Button type="button" onClick={() => handleVacinas(animal.id)}>
                  Vacinas
                </Button>
                <Button type="button" onClick={() => handleMedicamentos(animal.id)}>
                  Medicamentos
                </Button>
              </div>
            </div>

          </Card>
        ))}
      </GridArea>
    </Container>
  );
}
