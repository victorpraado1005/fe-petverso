import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import {
  Container, TitleContainer, Card, ButtonArea, GridArea,
} from './style';

import VaccineService from '../../services/VaccineService';

import history from '../../history';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';
import Modal from '../../Components/Modal';

export default function Vaccine() {
  const [vaccines, setVaccines] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [vaccineBeingDeleted, setVaccineBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const VaccineList = await VaccineService.listVaccinesByAnimalId(id);
        setVaccines(VaccineList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleCreateVaccine() {
    history.push(`/addVacinas/${id}`);
  }

  function handleDeleteVaccine(vaccine) {
    setVaccineBeingDeleted(vaccine);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setVaccineBeingDeleted(null);
  }

  async function handleConfirmDeleteAnimal() {
    try {
      await VaccineService.deleteVaccine(vaccineBeingDeleted.id);

      setVaccines((prevState) => prevState.filter(
        (animal) => animal.id !== vaccineBeingDeleted.id,
      ));

      handleCloseDeleteModal();
    } catch {
      alert('Não foi possível excluir essa vacina.');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        visible={isDeleteModalVisible}
        title="Tem certeza que deseja remover essa vacina?"
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteAnimal}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
      <Header />
      <Container>
        <TitleContainer>
          <h1>
            Vacinas
            {' '}
          </h1>
          <Button type="button" onClick={handleCreateVaccine}>
            + Adicionar
          </Button>
        </TitleContainer>
        <GridArea>
          {vaccines.map((vaccine) => (
            <Card key={vaccine.id}>
              <div className="animal-name">
                <strong>{vaccine.name}</strong>
              </div>
              <div className="section-info">
                <div className="animal-info">
                  <span>
                    Data de aplicação:
                    {' '}
                    {vaccine.application_date}
                  </span>
                  <span>
                    Próxima aplicação:
                    {' '}
                    {vaccine.next_application}
                  </span>
                </div>
              </div>
              <ButtonArea>
                {/* <Button type="button">Editar</Button> */}
                <Button type="button" className="delete-button" onClick={() => handleDeleteVaccine(vaccine)}>Apagar</Button>
              </ButtonArea>
            </Card>
          ))}
        </GridArea>
      </Container>
      <Footer />
    </>
  );
}
