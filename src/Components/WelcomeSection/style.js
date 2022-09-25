import styled from 'styled-components';

import banner from '../../assets/images/banner_main.svg';

export const Container = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 32px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};

  span{
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
