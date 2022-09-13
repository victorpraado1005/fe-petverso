import styled from 'styled-components';

export const TitleContainer = styled.div`
  margin-top: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 32px;
    height: 32px;
    position: relative;
    top: 5px;
    left: 0px;
  }

  h1{
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
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

  .animal-name{
      text-align: center;
      color: ${({ theme }) => theme.colors.primary.dark};
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
       color: ${({ theme }) => theme.colors.primary.dark};
       margin-bottom: 5px;
      }
    }
`;

export const ButtonArea = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .delete-button{
    background: ${({ theme }) => theme.colors.danger.dark};
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
    height: 40px;
    width: 25%;
  }
`;
