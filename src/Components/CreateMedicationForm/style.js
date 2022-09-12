import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 16px;
  margin-top: 55px;
  border-radius: 12px;

  img{
    width: 32px;
    height: 32px;
    position: relative;
    top: 10px;
    left: 0px;
  }

  h1{
    text-align: center;
    color: ${({ theme }) => theme.colors.background};
    margin: 24px 0px;
  }
`;

export const FormArea = styled.div`
  input, select{
    width: 60%;
  }
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
    margin-top: 40px;
    width: 50%;
    height: 35px;
    font-size: 14px;
  }
`;
