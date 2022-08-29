import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #DF8D53;
  padding: 16px;
  margin-top: 40px;
  border-radius: 12px;

  h1{
    color: #FFFFDE;
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  span{
    color: #FFFFDE;
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
