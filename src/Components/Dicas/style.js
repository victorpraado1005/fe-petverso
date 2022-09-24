import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 18px;

  h1{
    text-align: center;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ContainerCardDicas = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CardDicas = styled.div`
  max-width: 300px;
  width: 100%;
  padding-bottom: 12px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .img-curiosidade{
    width: 100%;
    height: 200px;
  }

  .text-dicas{
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 16px;
  }

  button{
    background: ${({ theme }) => theme.colors.primary.dark};
    width: 40%;
    height: 32px;
    justify-self: end;
  }

  a{
    padding: 8px 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
  }
`;
