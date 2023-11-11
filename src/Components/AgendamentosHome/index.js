import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import BanhoService from '../../services/BanhoService';
import ConsultaService from '../../services/ConsultaService';

import { CardHome } from '../../pages/Home/style';

import {
  TitleContainer, TitleAgendamentosContainer, ContainerCardsAgendamento, CardInfoAgendamento,
  ContainerCards,
} from './style';

export default function AgendamentosHome() {
  const { data } = useContext(Context);
  const [banhos, setBanhos] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const listBanhos = await BanhoService.listBanhoByUserlId(data.user.id);
        listBanhos.length = 2;
        const listConsultas = await ConsultaService.listConsultaByUserId(data.user.id);
        listConsultas.length = 2;
        setBanhos(listBanhos);
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
