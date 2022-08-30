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

export const TitleContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 60px;

    a {
      text-decoration: none;
      color: #FFFFDE;
      font-size: 14px;
    }

    button{
      background: #DF8D53;
      height: 35px;
      width: 130px;
    }
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  /* gap: 20px; */
  row-gap: 40px;
`;

export const Card = styled.div`
  width: 470px;
  height: 180px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border: 5px solid #EFBF82;
  border-radius: 18px;

    .animal-name{
      text-align: center;
      color: #DF8D53;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .section-info{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .animal-info{
      display: flex;
      flex-direction: column;
      justify-content: start;


      span{
       font-size: 16px;
       color: #DF8D53;
       margin-bottom: 5px;
      }
    }

    .button-details{
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
      place-items: start;
    }

    button{
      background-color: #DF8D53;
      width: 90px;
      height: 30px;
    }

    a{
      text-decoration: none;
      cursor: pointer;
      color: #FFFFDE;
      font-size: 10px;
    }

`;
