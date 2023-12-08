import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0px;
  color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 48px;
  transition: 0.3s;

  img{
    transition: 0.3s;
  }

  :hover{
    img{
      width: 36px;
      height: 36px;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 744px){
    flex-direction: row;
    align-items: start;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Card = styled.div`
  width: 260px;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  @media screen and (min-width: 320px){
    width: 300px;
  }

  @media screen and (min-width: 744px){
    width: 350px;
  }

  @media screen and (min-width: 1024px){
    height: 140px;
  }

  :hover{
    @media screen and (min-width: 1024px){
      width: 360px;
      height: 150px;
    }
  }
`;

export const InfoCardAgendamento = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .animal-name{
    text-align: center;
    font-size: 14px;
  }

  .first-line{
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    h3{
      font-size: 13px;
    }

    span{
      color: ${({ theme }) => theme.colors.backgroundDark};
     }
  }

  .second-line{
    text-align: center;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media screen and (min-width: 744px){
    span{
      font-size: 14px;
    }

    .animal-name{
      h3{
        font-size: 20px;
      }
    }

    .first-line{
      h3 {
        font-size: 16px;
      }
    }

    .second-line{
      h3 {
        font-size: 16px;
      }
    }
  }
`;
