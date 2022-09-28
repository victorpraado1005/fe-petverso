import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 55vh;
    margin: 0 auto;

    h1{
      text-align: center;
      color: ${({ theme }) => theme.colors.primary.dark};
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
      color: ${({ theme }) => theme.colors.background};
      font-size: 14px;
    }

    button{
      background: ${({ theme }) => theme.colors.primary.dark};
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

  button {
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 32px;
  border: 5px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 18px;

    .animal-name{
      text-align: center;
      color: ${({ theme }) => theme.colors.primary.dark};
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
       color: ${({ theme }) => theme.colors.primary.dark};
       margin-bottom: 5px;
      }
    }

    .button-details{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      place-items: start;
      text-align: center;
    }

    .delete-button{
    background: ${({ theme }) => theme.colors.danger.main};
  }

    button{
      background-color: ${({ theme }) => theme.colors.primary.dark};
      width: 100%;
      max-width: 140px;
      height: 40px;
      padding: 16px 18px;
      font-size: 14px;
    }

    a{
      text-decoration: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.background};
      font-size: 10px;
    }

`;
