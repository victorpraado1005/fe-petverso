import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  h1{
    font-size: 20px;
  }

  .button-area{
    display: flex;
    justify-content: space-evenly;
    width: 60%;
  }

  button{
    width: 120px;
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ListAnimalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 12px;
  padding: 12px;

  .data-animal{
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }
`;
