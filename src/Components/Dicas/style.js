import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 18px;

  h1{
    text-align: center;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ContainerCardDicas = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CardDicas = styled.div`
  max-width: 250px;
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-dicas{
    font-size: 18px;
    margin-bottom: 8px;
  }

  .text-dicas{
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 16px;
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
    width: 40%;
    height: 32px;
  }
`;
