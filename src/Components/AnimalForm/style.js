import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 16px;
  margin-top: 25px;
  border-radius: 12px;

  img{
    width: 32px;
    height: 32px;
    position: relative;
    top: 10px;
    left: 0px;
  }

  h1{
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    margin-bottom: 20px;
  }

`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  span{
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  button{
    margin-top: 40px;
    height: 50px;
    width: 70%;
    font-size: 16px;
  }
`;
