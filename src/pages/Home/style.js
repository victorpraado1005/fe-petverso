import styled from 'styled-components';

export const ContainerCardsHome = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CardHome = styled.div`
    max-width: 450px;
    width: 100%;
    margin-top: 25px;
    background: ${({ theme }) => theme.colors.primary.light};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;

    h1{
      font-size: 22px;
    }
`;
