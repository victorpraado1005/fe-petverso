import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.primary.dark};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CloseModalArea = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 8px;

  button{
    background: none;
    border: none;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  button{
    width: 250px;
    height: 46px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.backgroundDark};
    font-size: 16px;
    transition: 0.3s;
  }

  button:hover{
    width: 275px;
    height: 50px;
  }
`;

export const ButtonsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 64px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  button{
    transition: 0.3s;
  }

  button:hover{
    width: 100px;
    height: 35px;
  }

  .logout{
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: none;
    background: ${({ theme }) => theme.colors.danger.dark};
    color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: 0.3s;
  }

  .logout:hover{
    width: 175px;
    height: 50px;
  }
`;
