import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
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
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary.light};

    .title-container{
      padding: 12px;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      color: ${({ theme }) => theme.colors.background};
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 16px;
      background: ${({ theme }) => theme.colors.primary.dark};
    }

    .title-button{
      display: flex;
      align-items: center;
      justify-content: center;

      button{
        font-size: 12px;
        background: ${({ theme }) => theme.colors.primary.dark};
      }

      button ~ button {
          margin-left: 8px;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }

    .section-info{
      display: flex;
      flex-direction: column;
      padding: 12px;
    }

    .animal-info{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.background};


      span{
       font-size: 16px;
       margin-bottom: 5px;
      }
    }

    .button-details{
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-top: 10px;
      padding: 12px;
    }

    button{
      background-color: ${({ theme }) => theme.colors.primary.dark};
      width: 100px;
      height: 30px;
      font-size: 12px;
    }

    a{
      text-decoration: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.background};
      font-size: 10px;
    }

    .delete-button{
    background: ${({ theme }) => theme.colors.danger.main};

    button {
      width: 0px;
      height: 0px;
    }
  }

`;
