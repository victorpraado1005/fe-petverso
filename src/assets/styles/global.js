import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body{
    background: ${({ theme }) => theme.colors.backgroundDark};
    font-size: 16px;
    margin: auto;
  }

  button{
    cursor: pointer;
  }
`;
