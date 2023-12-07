import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

export const ContainerCardsHome = styled.div`
  width: 90%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 16px;
    align-items: start;
  }
`;
