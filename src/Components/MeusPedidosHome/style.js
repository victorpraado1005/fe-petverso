import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  background: ${({ theme }) => theme.colors.primary.light};
  border-radius: 15px;
  /* height: 300px; */
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
    width: 320px;
  }
`;

export const HeaderCardPedidos = styled.div`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
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
  }
`;

export const CardsContainerPedidos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

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

export const CardPedidos = styled.div`
  width: 240px;
  height: 95px;
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;

  span{
    font-size: 13px;
    font-weight: 100;
  }

  .title-data-pedido{
      font-weight: bold;
      margin-right: 5px;
  }

  @media screen and (min-width: 320px){
    width: 280px;
  }

  @media screen and (min-width: 744px){
    width: 300px;
  }

  @media screen and (min-width: 1024px){
    width: 260px;
  }

  @media screen and (min-width: 1100px){
    width: 300px;
  }
`;
