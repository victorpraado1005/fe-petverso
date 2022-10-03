import styled from 'styled-components';

export const TitleContainer = styled.div`
  padding: 12px;
  text-align: center;

  @media screen and (max-width: 1380px){

  h1{
    font-size: 18px;
  }
}
`;

export const TitleAgendamentosContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 4px;

  h1{
    font-size: 20px;
  }

  @media screen and (max-width: 1380px){

    h1{
      font-size: 18px;
    }
  }
`;

export const ContainerCardsAgendamento = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-around;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfoAgendamento = styled.div`
  width: 180px;
  padding: 4px;
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: 5px;

  .data-agendamento{
    display: flex;
    flex-direction: column;
    span{
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 12px;
    }

    h3{
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 15px;
      display: inline;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 1380px){
    width: 120px;

    .data-agendamento{
      span{
        font-size: 10px;
      }
      h3{
        font-size: 12px;
      }
    }
  }
`;
