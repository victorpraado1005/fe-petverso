import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};

  button{
    width: 120px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};

    :hover{
      width: 140px;
      height: 45px;
    }
  }
`;
