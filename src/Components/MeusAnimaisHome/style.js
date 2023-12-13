import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 250px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.primary.light};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 300px){
      width: 260px;
    }

    @media screen and (min-width: 744px){
      width: 400px;
    }

    @media screen and (min-width: 1024px){
      width: 300px;
      height: 350px;
    }

    @media screen and (min-width: 1060px){
      width: 320px;
    }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  h1{
    font-size: 18px;
  }

  button{
    width: 86px;
    border-radius: 5px;
    font-size: 12px;
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.background};
  }

  @media screen and (max-width: 300px){
    h1 {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 744px){
      h1{
        font-size: 20px;
      }

      button{
        width: 100px;
      }
    }
`;

export const ListAnimalsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 120px 120px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 12px;

  @media screen and (max-width: 300px){
    grid-template-columns: 110px 110px;
  }

  @media screen and (min-width: 744px){
    grid-template-columns: 180px 180px;
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: 130px 130px;
  }

  @media screen and (min-width: 1060px){
    grid-template-columns: 145px 145px;
  }
`;

export const CardAnimalName = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s;

  .btn-edit-animal{
    display: none;
    transition: 0.8s;
  }

  :hover{
    background: ${({ theme }) => theme.colors.backgroundDark};

    h1{
      display: none;
    }

    .btn-edit-animal{
      display: flex;

      button{
        width: 60px;
        background: ${({ theme }) => theme.colors.primary.dark};
        color: ${({ theme }) => theme.colors.background};
      }
    }
  }

  @media screen and (min-width: 744px){
    font-size: 8px;
  }
`;
