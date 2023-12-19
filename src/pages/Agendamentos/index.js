import { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

import Header from '../../Components/Header';
import arrowLeft from '../../assets/images/left-arrow_dark.png';

import BanhoService from '../../services/BanhoService';
import ConsultaService from '../../services/ConsultaService';

import formatDataToBrazilFormat from '../../utils/formatDataToBrazilFormat';

import {
  Container, TitleContainer, InfoContainer, CardsContainer, Card,
  InfoCardAgendamento,
} from './style';

export default function Agendamentos() {
  const { data } = useContext(Context);
  const [banhos, setBanhos] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const listBanhos = await BanhoService.listBanhoByUserlId(data.user.id);
        listBanhos.length = 2;
        setBanhos(listBanhos);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const listConsultas = await ConsultaService.listConsultaByUserId(data.user.id);
        listConsultas.length = 2;
        setConsultas(listConsultas);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Link to="/home">
            <img
              src={arrowLeft}
              alt="Seta para esquerda"
              title="Voltar"
              width={32}
              height={32}
            />
          </Link>
          <h1>Agendamentos:</h1>
          <div />
        </TitleContainer>
        <InfoContainer>
          <CardsContainer>
            <h1>Banhos:</h1>
            {banhos.map((banho) => (
              <Card key={banho.id}>
                <InfoCardAgendamento>
                  <div className="animal-name">
                    <h3>{banho.animal_name}</h3>
                  </div>
                  <div className="first-line">
                    <h3>Data: </h3>
                    <span>
                      {formatDataToBrazilFormat(banho.data_banho)}
                    </span>
                    <h3>Horário:</h3>
                    <span>
                      {banho.hora_banho}
                    </span>
                  </div>
                  <div className="second-line">
                    <h3>PetShop:</h3>
                    <span>
                      {banho.petshop}
                    </span>
                  </div>
                </InfoCardAgendamento>
              </Card>
            ))}
          </CardsContainer>
          <CardsContainer>
            <h1>Consultas:</h1>
            {consultas.map((consulta) => (
              <Card key={consulta.id}>
                <InfoCardAgendamento>
                  <div className="animal-name">
                    <h3>{consulta.animal_name}</h3>
                  </div>
                  <div className="first-line">
                    <h3>Data: </h3>
                    <span>
                      {formatDataToBrazilFormat(consulta.data_consulta)}
                    </span>
                    <h3>Horário:</h3>
                    <span>
                      {consulta.hora_consulta}
                    </span>
                  </div>
                  <div className="second-line">
                    <h3>PetShop:</h3>
                    <span>
                      {consulta.clinica}
                    </span>
                  </div>
                </InfoCardAgendamento>
              </Card>
            ))}
          </CardsContainer>
        </InfoContainer>
      </Container>
    </>
  );
}
