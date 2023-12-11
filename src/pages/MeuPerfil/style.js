import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
`;

export const ContainerContent = styled.div`
  display: flex;
`;

export const UserData = styled.div`
  width: 100%;
  max-width: 400px;
  height: 70vh;
  max-height: 600px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.background};

  h3{
    font-size: 22px;
  }
`;

export const TitleUserData = styled.div`
  text-align: center;
  margin: 16px 0px;
`;

export const SubTitleUserData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  h3{
    margin-bottom: 8px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const AnimalsName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 16px;

  h3{
    margin-bottom: 8px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
`;

export const CardBeneficiosAssinatura = styled.div`
  /* width: 100%; */
  width: 600px;
  padding: 24px 12px;
  background: ${({ theme }) => theme.colors.primary.main};
  margin-top: 15px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.background};

  h3{
    text-align: center;
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

export const ContainerCardInfoBeneficios = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CardInfoBeneficiosAssinatura = styled.div`
    max-width: 137px;
    width: 100%;
    padding: 8px;
    border: 3px solid #FFFFDE;
    border-radius: 2px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
      font-size: 16px;
    }

    span{
      font-size: 8px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    img{
      width: 50px;
      height: 50px;
      position: relative;
      top: -15px;
    }
`;

export const ContainerNotSubscriber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 16px;
    text-align: center;
    margin-bottom: 16px;
  }

  button{
    width: 20%;
  }
`;

export const CardAtividades = styled.div`
  width: 600px;
  padding: 24px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.background};

  .title-card-pedidos{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h1{
    font-size: 22px;
    text-align: center;
  }
  }
`;

export const ContainerCardPedidos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  gap: 30px;
`;

export const CardPedidos = styled.div`
    max-width: 234px;
    width: 100%;
    padding: 8px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    span{
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 12px;
    }

    .title-data-pedido{
      font-weight: bold;
      margin-right: 5px;
    }
`;
