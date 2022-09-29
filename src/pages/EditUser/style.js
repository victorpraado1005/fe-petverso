import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 0px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 16px;
  margin-top: 20px;
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
    margin-bottom: 24px;
  }

`;

export const FormArea = styled.div`
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  span{
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    font-size: 16px;
  }

  input, select{
    width: 260px;
    margin-bottom: 10px;
  }

  .email{
    align-self: center;
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
    width: 60%;
    font-size: 16px;
  }
`;
