import styled from 'styled-components';

export const Card = styled.div`
  width: 260px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 64px;

  img{
    width: 24px;
    height: 24px;
    position: relative;
    top: 5px;
    left: 0px;
  }

  h1{
    color: ${({ theme }) => theme.colors.background};
    font-size: 22px;
    text-align: center;
  }

  @media screen and (min-width: 425px) {
    width: 350px;

    h1{
      font-size: 24px;
    }
  }

  @media screen and (min-width: 744px) {
    width: 600px;
    gap: 16px;

    h1{
      font-size: 26px;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 24px;
    width: 800px;

    h1{
      font-size: 30px;
    }
  }
`;

export const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  input{
    width: 180px;
  }

  select{
    width: 180px;
  }

  @media screen and (min-width: 425px) {
    input{
      width: 220px;
    }

    select{
      width: 220px;
    }
  }

  @media screen and (min-width: 744px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    gap: 8px;

    input{
      width: 280px;
    }

    select{
      width: 280px;
    }
  }

  @media screen and (min-width: 1024px) {
    input{
      width: 320px;
    }

    select{
      width: 320px;
    }
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  button{
    margin-top: 24px;
    height: 40px;
    width: 200px;
    font-size: 14px;
  }

  :hover{
    button{
      width: 240px;
      height: 55px;
     }
   }

   @media screen and (min-width: 425px) {
    button{
      width: 220px;
    }
  }

  @media screen and (min-width: 744px) {
    button{
      width: 260px;
    }

    :hover{
    button{
      width: 280px;
     }
   }
  }

  @media screen and (min-width: 1024px) {
    button{
      margin-top: 32px;
      height: 50px;
      font-size: 16px;
    }
  }
`;
