import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  padding-top: 32px;
  gap: 16px;

  .pataIntroEsquerda{
    display: none;

    @media screen and (min-width: 744px) {
      display: block;
    }
  }

  @media screen and (min-width: 744px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 84px;
      height: 84px;
    }
  }
`;

export const ContainerText = styled.div`
  text-align: center;
  padding: 0px 8px;

  h1 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  span{
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.light};
  }

  @media screen and (min-width: 744px) {
    flex-direction: row;
    justify-content: space-around;

    h1 {
      font-size: 28px;
    }

    span {
      font-size: 16px;
    }
  }
`;
