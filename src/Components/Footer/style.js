import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 92%;
  width: 100%;
  max-width: 500px;
  height: 55px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 28px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a{
    font-size: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }
`;

export const LineWhite = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  height: 35px;
`;
