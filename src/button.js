import styled from 'styled-components';

export default styled.button`
    width: 90px;
    height: 32px;
    border: none;
    /* padding: 0 20px; */
    background: ${({ theme }) => theme.colors.background};
    font-size: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    line-height: 15px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary.dark};
    transition: 0.3s;

    :hover{
      width: 105px;
      height: 35px;
    }
`;
