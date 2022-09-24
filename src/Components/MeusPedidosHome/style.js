import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
    font-size: 15px;
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
