import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background: #DF8D53;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;

  .iconMenu{
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  span{
    cursor: pointer;
  }

  .navBar{
    display: flex;
    gap: 8px;

    /* button {
      width: 100px;
      height: 35px;
    } */
  }

  .delete-button{
    background: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.background};
    transition: 0.3s;
  }

  .delete-button:hover{
    background: ${({ theme }) => theme.colors.danger.dark};
  }

  @media screen and (min-width: 744px) {
    padding: 0px 32px;

    .iconMenu{
      display: none;
    }
  }

  @media screen and (max-width: 744px){
    .navBar{
      display: none;

      .delete-button{
       color: ${({ theme }) => theme.colors.background};
        background: ${({ theme }) => theme.colors.danger.main};
      }
    }
  }
`;
