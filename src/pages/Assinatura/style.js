import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  .title-text{
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.dark};;
    width: 120px;
    padding-top: 12px;
  }

  .info-garantia{
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
  }
`;

export const ContainerFormCriarConta = styled.div`
    max-width: 1440px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-crie-conta{
    font-size: 22px;
    margin-bottom: 30px;
  }


  .input-container{
    width: 100%;
    max-width: 1200px;
  }

  .input-container input {
    width: 512px;
    height: 35px;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);
    border: none;
    margin-bottom: 10px;
    border-bottom: 1px solid #C7C7C7;
    outline: none;
    padding-left: 5px;
  }

  .input-area-info-user{
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .input-area-address{
    width: 100%;
    max-width: 1113px;
    display: flex;
    justify-content: space-between;
  }

  .input-numero-complemento{
    display: flex;
  }

  .input-rua input {
    width: 319px;
  }

  .input-cep input{
    width: 168px;
  }

  .input-cidade input{
    margin-left: 62px;
    width: 256px;
  }

  .input-estado input{
    margin-left: 32px;
    width: 225px;
  }
`;

export const ContainerUsario = styled.div`
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 20px;
  }

  h3{
    margin-top: 50px;
  }
`;

export const ContainerEndereco = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

export const CardEndereco = styled.div`
  background-color: white;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);
  margin-top: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-bottom: 1px solid #C7C7C7;

  span{
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const Line = styled.div`
  margin: 60px 0px;
  border: 1px solid #C7C7C7;
`;

export const ContainerAssinatura = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
`;

export const ContainerPlanos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
`;

export const CardPlanos = styled.div`
  width: 220px;
  height: 230px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .info-card-nao-assinante{
    margin-top: 20px;
    font-size: 14px;
  }

  .info-card-nao-assinante p {
    margin-bottom: 5px;
  }

  .info-card-nao-assinante ul {
    padding: 12px;
  }
`;

export const CardResumo = styled.div`
  width: 315px;
  height: 320 px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4{
    font-size: 20px;
  }

  .plano-selecionado{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .info-pagamento{
    text-align: center;
    font-size: 12px;
  }

  .btn-confirmar button{
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: white;
  }
`;
