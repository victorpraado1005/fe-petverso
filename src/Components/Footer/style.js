import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 92%;
  width: 90%;
  max-width: 400px;
  height: 50px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 28px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 1024px) {
    transform: translateX(0);
    position: static;
    width: 45px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 48px;
    padding-top: 24px;
    border-radius: 0px;
    background: ${({ theme }) => theme.colors.primary.main};
  }

  a{
    font-size: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 1024px) {
      flex-direction: column;
      gap: 32px;
    }
`;
