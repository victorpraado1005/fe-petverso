import styled from 'styled-components';

export const ContainerFooterHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-bottom: 32px;

  img{
    width: 72px;
    height: 72px;
  }

  button{
    background: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    width: 88px;
    height: 32px;
    border-radius: 20px;

    img{
      width: 18px;
      height: 18px;
    }

    .btn-content{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  @media screen and (min-width: 1024px){
    display: none;
  }
`;
