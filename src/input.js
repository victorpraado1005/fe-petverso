import styled, { css } from 'styled-components';

export default styled.input`
  margin-top: 8px;
  width: 100%;
  height: 32px;
  background: #FFFFDE;
  border: none;
  border-radius: 6px;
  padding: 8px;
  outline: none;

  ${({ error }) => error && css`
    color: #F63131;
    border: 2px solid #F63131;
    font-weight: bold;
  `}
`;
