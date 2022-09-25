import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  margin-top: 65px;
  color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ContainerListaProdutos = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  flex-direction: column;

  h1{
    margin-bottom: 20px;
  }

  button{
    width: 20%;
  }
`;

export const RowProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span{
    font-size: 18px;
  }

  .text-valor{
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  margin-top: 20px;
  padding: 10px;

  h1{
    margin-bottom: 10px;
  }
`;

export const RowProductCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span{
    font-size: 18px;
  }
`;
