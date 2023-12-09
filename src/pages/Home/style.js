import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 64px; */
`;

export const ContainerContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 48px;

  @media screen and (min-width: 1024px){
    padding-top: 0px;
  }
`;

export const ContainerInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 32px;

  @media screen and (min-width: 1024px){
    justify-content: start;
    padding-top: 64px;
  }
`;

export const ContainerCardsHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 16px;
    width: 100%;
    align-items: center;
  }
`;
