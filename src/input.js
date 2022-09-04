import styled, { css } from 'styled-components';

export default styled.input`
  margin-top: 8px;
  width: 100%;
  height: 32px;
  background: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 6px;
  padding: 8px;
  outline: none;

  ${({ error }) => error && css`
    color: ${({ theme }) => theme.colors.danger.dark};
    border: 2px solid ${({ theme }) => theme.colors.danger.dark};
    font-weight: bold;
  `}
`;
