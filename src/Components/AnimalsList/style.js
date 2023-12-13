import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 64px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 70px;
    background: ${({ theme }) => theme.colors.primary.light};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: ${({ theme }) => theme.colors.background};

    h1{
      font-size: 16px;
    }

    button{
      width: 90px;
      height: 35px;
      background: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.background};
      font-size: 10px;
    }

    button:hover{
        width: 140px;
        height: 40px;
    }

    @media screen and (min-width: 744px) {
      h1{
        font-size: 20px;
      }

      button{
        width: 110px;
      }
    }

    @media screen and (min-width: 1024px) {
      h1{
        font-size: 24px;
      }

      button{
        width: 120px;
        font-size: 12px;
      }
    }
`;

export const GridArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  button {
    color: ${({ theme }) => theme.colors.background};
  }

  @media screen and (min-width: 744px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
  }

  @media screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  width: 260px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

    .title-container{
      width: 100%;
      padding: 12px;
      border-radius: 12px 12px 0px 0px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      color: ${({ theme }) => theme.colors.background};
      font-size: 16px;
      height: 50px;
      font-weight: bold;
      background: ${({ theme }) => theme.colors.primary.dark};
    }

    .title-button{
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        font-size: 12px;
        background: ${({ theme }) => theme.colors.primary.dark};
        width: 0px;
      }

      button ~ button {
          margin-left: 40px;
      }
    }

    .section-info{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 12px;
      margin-bottom: 8px;
    }

    .animal-info{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.backgroundDark};
      font-size: 10px;

      strong{
        color: ${({ theme }) => theme.colors.background};
      }
    }

    .button-details{
      display: flex;
      justify-content: space-evenly;
      gap: 8px;
      text-align: center;

      button {
        background-color: ${({ theme }) => theme.colors.primary.dark};
        width: 85px;
        height: 35px;
        font-size: 9px;
        transition: 0.3s;
        padding: 6px;
      }

      button:hover{
        width: 100px;
      }
    }

    .delete-button{
    background: ${({ theme }) => theme.colors.danger.main};

    button {
      width: 0px;
      height: 0px;
    }
  }

  @media screen and (min-width: 425px){
    width: 320px;

    .animal-info{
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1024px){
    width: 350px;

    .title-container{
      font-size: 18px;
    }

    .animal-info{
      font-size: 14px;
    }

    .button-details{
      button{
        width: 100px;
        font-size: 11px;
        padding: 8px;
      }
    }
  }

  @media screen and (min-width: 1230px){
    width: 375px;
  }
`;
