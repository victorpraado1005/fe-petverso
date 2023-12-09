import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 350px;
  overflow-y: scroll;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;

  @media screen and (min-width: 320px){
    width: 300px;
  }

  @media screen and (min-width: 744px){
    width: 690px;
  }

  @media screen and (min-width: 1024px){
    width: 300px;
  }

  @media screen and (min-width: 1060px){
    width: 320px;
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;

  h1 {
    font-size: 16px;
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
    width: 80px;
  }

  @media screen and (min-width: 300px){
    h1 {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 744px){
    button {
      width: 100px;
    }

    h1 {
      font-size: 20px;
    }
  }
`;

export const TitleAgendamentosContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 4px;

  h1{
    font-size: 20px;
  }

  @media screen and (max-width: 1380px){

    h1{
      font-size: 18px;
    }
  }
`;

export const ContainerCardsAgendamento = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;

  @media screen and (min-width: 744px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px 16px;
  }

  @media screen and (min-width: 1024px){
    display: flex;
  }
`;

export const CardAgendamentos = styled.div`
  width: 240px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 12px 4px;
  gap: 8px;

  @media screen and (min-width: 320px) {
      width: 280px;
  }

  @media screen and (min-width: 744px){
    width: 300px;
  }

  @media screen and (min-width: 1024px){
    width: 270px;
  }

  @media screen and (min-width: 1100px){
    width: 300px;
  }
`;

export const HeaderInfoCardAgendamentos = styled.div`
    width: 100%;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;

    span {
      font-size: 14px;
    }
`;

export const InfoCardAgendamentos = styled.div`
    width: 100%;
    padding: 6px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    span{
      font-size: 10px;
    }

    h3{
      font-size: 11px;
      display: inline;
    }

    @media screen and (min-width: 320px) {
      span{
        font-size: 12px;
      }

      h3{
        font-size: 13px;
      }
    }
`;

export const SecondLineInfoCardAgendamentos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span{
      font-size: 10px;
    }

    h3{
      font-size: 11px;
      display: inline;
    }

    @media screen and (min-width: 320px) {
      span{
        font-size: 12px;
      }

      h3{
        font-size: 13px;
      }
    }
`;

export const ContainerSemAgendamentos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.background};
`;
