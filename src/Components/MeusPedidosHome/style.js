import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
    width: 100px;
  }

  @media screen and (max-width: 1380px){
    button{
      width: 80px;
    }

    h1{
      font-size: 18px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  place-items: center;

  @media screen and (max-width: 1380px){
      display: flex;
      flex-direction: column;
  }
`;

export const CardPedidos = styled.div`
  width: 200px;
  height: 100px;
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  flex-direction: column;

  span{
    font-size: 13px;
  }

  .title-data-pedido{
      font-weight: bold;
      margin-right: 5px;
    }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;
