import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import BanhoService from '../../services/BanhoService';
import ConsultaService from '../../services/ConsultaService';

// import { CardHome } from '../../pages/Home/style';

import formatDataToBrazilFormat from '../../utils/formatDataToBrazilFormat';

import {
  Container, HeaderCard, ContainerCardsAgendamento, CardAgendamentos,
  HeaderInfoCardAgendamentos, InfoCardAgendamentos, SecondLineInfoCardAgendamentos,
} from './style';
import Button from '../../button';
import history from '../../history';

export default function AgendamentosHome() {
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
    <Container>
      <HeaderCard>
        <h1>Agendamentos:</h1>
        <Button onClick={() => history.push('/agendamentos')}>Ver Todos</Button>
      </HeaderCard>
      <ContainerCardsAgendamento>
        {banhos.map((banho) => (
          <CardAgendamentos key={banho.id}>
            <HeaderInfoCardAgendamentos>
              <h2>Banho:</h2>
              <span>
                {banho.animal_name}
              </span>
            </HeaderInfoCardAgendamentos>
            <InfoCardAgendamentos>
              <div>
                <h3>Data: </h3>
                <span>
                  {formatDataToBrazilFormat(banho.data_banho)}
                </span>
              </div>
              <div>
                <h3>Horário: </h3>
                <span>
                  {banho.hora_banho}
                </span>
              </div>
            </InfoCardAgendamentos>
            <SecondLineInfoCardAgendamentos>
              <h3>PetShop: </h3>
              <span>
                {banho.petshop}
              </span>
            </SecondLineInfoCardAgendamentos>
          </CardAgendamentos>
        ))}
        {consultas.map((consulta) => (
          <CardAgendamentos key={consulta.id}>
            <HeaderInfoCardAgendamentos>
              <h2>Consulta:</h2>
              <span>
                {consulta.animal_name}
              </span>
            </HeaderInfoCardAgendamentos>
            <InfoCardAgendamentos>
              <div>
                <h3>Data: </h3>
                <span>
                  {formatDataToBrazilFormat(consulta.data_consulta)}
                </span>
              </div>
              <div>
                <h3>Horário: </h3>
                <span>
                  {consulta.hora_consulta}
                </span>
              </div>
            </InfoCardAgendamentos>
            <SecondLineInfoCardAgendamentos>
              <h3>Clinica: </h3>
              <span>
                {consulta.clinica}
              </span>
            </SecondLineInfoCardAgendamentos>
          </CardAgendamentos>
        ))}
      </ContainerCardsAgendamento>
    </Container>
  );
}
