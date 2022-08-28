import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 55vh;
    margin: 0 auto;

    h1{
      text-align: center;
      color: #DF8D53;
      margin-top: 16px;
      margin-bottom: 32px;
      font-size: 24px;
    }
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  gap: 20px;
`;

export const Card = styled.div`
  background: #EFBF82;
  width: 280px;
  height: 225px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  border-radius: 18px;

    .animal-name{
      text-align: center;
      color: #FFFFDE;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .animal-info{
      display: flex;
      flex-direction: column;
      justify-content: start;


      span{
       font-size: 16px;
       color: #FFFFDE;
       margin-bottom: 5px;
      }
    }

    .button-details{
      margin-top: 24px;
      text-align: center;
    }

`;
