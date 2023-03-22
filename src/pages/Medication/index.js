import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import {
  TitleContainer, Card, ButtonArea, GridArea,
} from './style';

import MedicationService from '../../services/MedicationService';

import history from '../../history';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';
import Modal from '../../Components/Modal';

import arrowLeft from '../../assets/images/left-arrow_dark.png';

import formatDateToBrazil from '../../utils/formatDateToBrazil';

export default function Medication() {
  const [medications, setMedications] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [medicationBeingDeleted, setMedicaitonBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const medicationList = await MedicationService.listMedicationByAnimalId(id);
        setMedications(medicationList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleCreateMedication() {
    history.push(`/addMedicamento/${id}`);
  }

  function handleDeleteMedication(medication) {
    setMedicaitonBeingDeleted(medication);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setMedicaitonBeingDeleted(null);
  }

  async function handleConfirmDeleteMedication() {
    try {
      await MedicationService.deleteMedication(medicationBeingDeleted.id);

      setMedications((prevState) => prevState.filter(
        (medication) => medication.id !== medicationBeingDeleted.id,
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
        title="Tem certeza que deseja remover essa medicação?"
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteMedication}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
      <Header />
      <TitleContainer>
        <Link to="/animals">
          <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
        </Link>
        <h1>
          Medicamentos
          {' '}
        </h1>
        <Button type="button" onClick={handleCreateMedication}>
          + Adicionar
        </Button>
      </TitleContainer>
      <GridArea>
        {medications.map((medication) => (
          <Card key={medication.id}>
            <div className="animal-name">
              <strong>{medication.medicine_name}</strong>
            </div>
            <div className="section-info">
              <div className="animal-info">
                <span>
                  Data de Início:
                  {' '}
                  {formatDateToBrazil(medication.start_date)}
                </span>
                <span>
                  Data de Término:
                  {' '}
                  {formatDateToBrazil(medication.end_date)}
                </span>
                <span>
                  Repetição:
                  {' '}
                  {medication.repetition}
                </span>
              </div>
            </div>
            <ButtonArea>
              {/* <Button type="button">Editar</Button> */}
              <Button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteMedication(medication)}
              >
                Apagar
              </Button>
            </ButtonArea>
          </Card>
        ))}
      </GridArea>
      <Footer />
    </>
  );
}
