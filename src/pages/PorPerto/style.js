import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 48px;

  h1{
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 28px;
  }
`;

export const InputArea = styled.div`
  /* border: 1px solid; */
  margin-top: 24px;
  display: flex;
  justify-content: end;
  padding-right: 16px;

  span {
    font-size: 18px;
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-weight: bold;
  }

  input{
    margin-left: 20px;
  }
`;

export const ListArea = styled.div`
  /* border: 1px solid; */
  padding: 20px;

  h1{
    text-align: start;
  }
`;
