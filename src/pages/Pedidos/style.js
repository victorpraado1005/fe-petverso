import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  margin-top: 65px;
  color: ${({ theme }) => theme.colors.primary.dark};


  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ContainerProductsAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const ContainerListaProdutos = styled.div`
  max-width: 550px;
  width: 100%;
  height: 350px;
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
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
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

export const ContainerTotal = styled.div`
    margin-top: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    padding: 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
`;

export const ContainerInfoEntrega = styled.div`
  padding: 10px;

  h1{
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const RowInfoAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .row{
    margin-bottom: 5px;
  }

  .title-address{
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.primary.main};
    }

    button{
      margin-top: 20px;
      width: 20%;
    }
`;

export const RowInfoFrete = styled.div`
  display: flex;
  flex-direction: column;

  .text-assinatura-frete{
    margin-top: 20px;
  }
`;

export const RowOptionFrete = styled.div`
  display: flex;
  span{
    margin-right: 10px;
  }
  `;

export const ContainerCupons = styled.div`
  display: flex;
  padding: 12px;
  border: 1px solid black;

  h1{
    font-size: 22px;
  }
`;

export const ContainerTotalPedido = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  .border-total{
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    padding: 12px;
  }

  h1{
    font-size: 22px;
    margin-bottom: 10px;
  }

  button{
    margin-top: 20px;
    background: ${({ theme }) => theme.colors.success};
    height: 40px;
  }
`;
