import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 250px;
  min-width: 200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 16px;
  margin-top: 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.background};

  .title-card{
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .data-card{
    display: flex;
    flex-direction: column;
    font-size: 12px;

    span{
      margin-bottom: 5px;
     }
  }

  .button-card{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 110px;
    }
  }

  @media screen and (max-width: 1130px) {
    width: 150px;
  }
`;
