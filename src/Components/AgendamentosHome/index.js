import { useEffect, useState } from 'react';

import BanhoService from '../../services/BanhoService';
import ConsultaService from '../../services/ConsultaService';

import { CardHome } from '../../pages/Home/style';

import {
  TitleContainer, TitleAgendamentosContainer, ContainerCardsAgendamento, CardInfoAgendamento,
  ContainerCards,
} from './style';

export default function AgendamentosHome() {
  const UserId = localStorage.getItem('UserID');
  const [banhos, setBanhos] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const listBanhos = await BanhoService.listBanhoByUserlId(UserId);
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
        const listConsultas = await ConsultaService.listConsultaByUserId(UserId);
        listConsultas.length = 2;
        setConsultas(listConsultas);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <CardHome>
      <TitleContainer>
        <h1>Agendamentos:</h1>
      </TitleContainer>
      <TitleAgendamentosContainer>
        <h1>Banhos: </h1>
        <h1>Consultas: </h1>
      </TitleAgendamentosContainer>
      <ContainerCardsAgendamento>
        <ContainerCards>
          {banhos.map((banho) => (
            <CardInfoAgendamento>
              <div className="data-agendamento">
                <div>
                  <h3>Data: </h3>
                  <span>
                    {banho.data_banho}
                  </span>
                </div>
                <div>
                  <h3>Horário: </h3>
                  <span>
                    {banho.hora_banho}
                  </span>
                </div>
                <div>
                  <h3>PetShop: </h3>
                  <span>
                    {banho.petshop}
                  </span>
                </div>
                <div>
                  <h3>Animal: </h3>
                  <span>
                    {banho.animal_name}
                  </span>
                </div>
              </div>
            </CardInfoAgendamento>
          ))}
        </ContainerCards>
        <ContainerCards>
          {consultas.map((consulta) => (
            <CardInfoAgendamento>
              <div className="data-agendamento">
                <div>
                  <h3>Data: </h3>
                  <span>
                    {consulta.data_consulta}
                  </span>
                </div>
                <div>
                  <h3>Horário: </h3>
                  <span>
                    {consulta.hora_consulta}
                  </span>
                </div>
                <div>
                  <h3>Clinica: </h3>
                  <span>
                    {consulta.clinica}
                  </span>
                </div>
                <div>
                  <h3>Animal: </h3>
                  <span>
                    {consulta.animal_name}
                  </span>
                </div>
              </div>
            </CardInfoAgendamento>
          ))}
        </ContainerCards>
      </ContainerCardsAgendamento>
    </CardHome>
  );
}
