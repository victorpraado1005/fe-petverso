import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  border: 2px solid #fbbd51;
  border-radius: 8px;
  padding: 16px;

  h1{
    margin-bottom: 16px;
  }

  input{
    margin-top: 16px;
    width: 50%;
    height: 32px;
  }

  button{
    margin-top: 24px;
    height: 40px;
    border: none;
    padding: 0 16px;
    font-size: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    border-radius: 4px;
    background: #fbbd51;
  }
`;
