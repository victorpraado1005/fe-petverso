import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import {
  Container, TitleContainer, Card, ButtonArea, GridArea,
} from './style';

import BanhoService from '../../services/BanhoService';

import formatDateToBrazil from '../../utils/formatDateToBrazil';

import CutDateTime from '../../utils/cutTime';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';
import Modal from '../../Components/Modal';

import arrowLeft from '../../assets/images/left-arrow_dark.png';

export default function Vaccine() {
  const [banhos, setBanhos] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [banhoBeingDeleted, setBanhoBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const BanhosList = await BanhoService.getBanhoByAnimalId(id);
        setBanhos(BanhosList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleDeleteBanho(banho) {
    setBanhoBeingDeleted(banho);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setBanhoBeingDeleted(null);
  }

  async function handleConfirmDeleteAnimal() {
    try {
      await BanhoService.deleteBanho(banhoBeingDeleted.id);

      setBanhos((prevState) => prevState.filter(
        (banho) => banho.id !== banhoBeingDeleted.id,
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
        title="Tem certeza que deseja remover esse banho?"
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteAnimal}
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
            Banhos Agendados
            {' '}
          </h1>
        </TitleContainer>
        <GridArea>
          {banhos.map((banho) => (
            <Card key={banho.id}>
              <div className="animal-name">
                <strong>{banho.name}</strong>
              </div>
              <div className="section-info">
                <div className="animal-info">
                  <span>
                    <strong>
                      Data do banho:
                    </strong>
                    {' '}
                    {formatDateToBrazil(banho.data_banho)}
                  </span>
                  <span>
                    <strong>
                      Hora do banho:
                    </strong>
                    {' '}
                    {CutDateTime(banho.hora_banho)}
                  </span>
                  <span>
                    <strong>
                      PetShop:
                    </strong>
                    {' '}
                    {banho.petshop}
                  </span>
                  <span>
                    <strong>
                      Animal:
                    </strong>
                    {' '}
                    {banho.animal_name}
                  </span>
                </div>
              </div>
              <ButtonArea>
                {/* <Button type="button">Editar</Button> */}
                <Button type="button" className="delete-button" onClick={() => handleDeleteBanho(banho)}>Apagar</Button>
              </ButtonArea>
            </Card>
          ))}
        </GridArea>
      </Container>
      <Footer />
    </>
  );
}
