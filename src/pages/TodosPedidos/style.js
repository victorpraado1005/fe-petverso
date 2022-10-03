import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 65px;
  margin-bottom: 80px;

  .title-pedidos{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.dark};

    img{
      width: 40px;
      height: 40px;
    }
  }
`;

export const GridArea = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  row-gap: 20px;

  button {
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Card = styled.div`
  width: 470px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border: 5px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 18px;
  margin-top: 20px;

    .pedido-info{
      display: flex;
      flex-direction: column;
      justify-content: start;


      span{
       font-size: 16px;
       color: ${({ theme }) => theme.colors.primary.dark};
       margin-bottom: 5px;
      }
    }
`;
