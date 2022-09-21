import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 45px;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UserData = styled.div`
  width: 100%;
  max-width: 400px;
  height: 550px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.background};
`;

export const TitleUserData = styled.div`
  text-align: center;
  margin: 16px 0px;
`;

export const SubTitleUserData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  h3{
    margin-bottom: 8px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;

  button{
    width: 30%;
  }
`;

export const AnimalsName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 16px;

  h3{
    margin-bottom: 8px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;

export const CardAtividades = styled.div`
  width: 500px;
  padding: 18px;
  background: ${({ theme }) => theme.colors.primary.light};
`;

export const CardPlano = styled.div`
  width: 500px;
  padding: 18px;
  background: ${({ theme }) => theme.colors.primary.main};
`;
