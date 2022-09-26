import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 65px;
  text-align: center;

  h1{
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const ContainerPetShops = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  row-gap: 40px;
  place-items: center;
`;

export const CardLojas = styled.div`
  width: 250px;
  /* height: 250px; */
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 12px;
  text-align: center;
  border-radius: 6px;

  h1{
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const AreaCupons = styled.div`
  display: flex;
  flex-direction: column;

  span{
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.background};
  }

  h3{
    margin-top: 5px;
    font-size: 12px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.success};
    border-radius: 6px;
    padding: 2px;
  }
`;
