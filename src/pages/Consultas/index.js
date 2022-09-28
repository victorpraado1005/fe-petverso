import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import {
  Container, TitleContainer, Card, ButtonArea, GridArea,
} from './style';

import ConsultaService from '../../services/ConsultaService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';
import Modal from '../../Components/Modal';

import arrowLeft from '../../assets/images/left-arrow_dark.png';

export default function Vaccine() {
  const [List, setConsultas] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [consultaBeingDeleted, setConsultaBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const consultasList = await ConsultaService.getConsultaByAnimalId(id);
        setConsultas(consultasList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleDeleteConsulta(banho) {
    setConsultaBeingDeleted(banho);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setConsultaBeingDeleted(null);
  }

  async function handleConfirmDeleteConsulta() {
    try {
      await ConsultaService.deleteConsulta(consultaBeingDeleted.id);

      setConsultas((prevState) => prevState.filter(
        (banho) => banho.id !== consultaBeingDeleted.id,
      ));

      handleCloseDeleteModal();
    } catch {
      alert('Não foi possível excluir esse banho.');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        visible={isDeleteModalVisible}
        title="Tem certeza que deseja remover essa consulta?"
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteConsulta}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
      <Header />
      <Container>
        <Link to="/animals">
          <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
        </Link>
        <TitleContainer>
          <h1>
            Consultas Agendadas
            {' '}
          </h1>
        </TitleContainer>
        <GridArea>
          {List.map((consulta) => (
            <Card key={consulta.id}>
              <div className="animal-name">
                <strong>{consulta.name}</strong>
              </div>
              <div className="section-info">
                <div className="animal-info">
                  <span>
                    Data do banho:
                    {' '}
                    {consulta.data_consulta}
                  </span>
                  <span>
                    Hora do banho:
                    {' '}
                    {consulta.hora_consulta}
                  </span>
                  <span>
                    Clínica:
                    {' '}
                    {consulta.clinica}
                  </span>
                  <span>
                    Animal:
                    {' '}
                    {consulta.animal_name}
                  </span>
                </div>
              </div>
              <ButtonArea>
                {/* <Button type="button">Editar</Button> */}
                <Button type="button" className="delete-button" onClick={() => handleDeleteConsulta(consulta)}>Apagar</Button>
              </ButtonArea>
            </Card>
          ))}
        </GridArea>
      </Container>
      <Footer />
    </>
  );
}
