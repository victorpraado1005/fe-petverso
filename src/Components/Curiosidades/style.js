import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.background};

  .text-card{
    height: 100%;
    display: flex;
    align-items: end;
    padding: 20px;
    font-size: 10px;
  }

  @media screen and (min-width: 744px){
    .text-card{
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1024px){
    height: 350px;
  }
`;
