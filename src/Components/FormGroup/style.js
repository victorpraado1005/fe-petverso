import styled from 'styled-components';

export const Container = styled.div`

  & + &{
    margin-top: 16px;
  }

  small{
    color: ${({ theme }) => theme.colors.danger.dark};
    font-weight: bold;
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }
`;
