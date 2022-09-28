import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  h1{
    font-size: 22px;
  }

  .button-area{
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  button{
    width: 100px;
    font-size: 12px;
    padding: 0 14px;
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }

  @media screen and (max-width: 1380px){
    flex-direction: column;
    font-size: 12px;

    .button-area{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    }

    button{
      margin-top: 10px;
      width: 100px;
    }

    h1{
      font-size: 18px;
    }
  }
`;

export const ListAnimalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;

  .data-animal{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    h1{
      font-size: 20px;
    }

  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
    width: 100px;
  }

  @media screen and (max-width: 1380px){
    font-size: 12px;
    button{
      width: 60px;
    }
  }
`;
