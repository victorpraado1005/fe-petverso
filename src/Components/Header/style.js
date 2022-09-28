import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 0px 10px;

  img{
    width: 200px;
    height: 50px;
  }
`;

export const ButtonArea = styled.div`
  button{
    width: 100px;
  }

  button ~ button{
      margin-left: 12px;
  }

  .delete-button{
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.danger.main};
  }
`;
