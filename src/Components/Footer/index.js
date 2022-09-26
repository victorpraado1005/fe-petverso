import { Link } from 'react-router-dom';

import { Container, LineWhite } from './style';

export default function Footer() {
  return (
    <Container>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/animals">Animais</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/porperto">O que tem por perto?</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/lojas">PetShops</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/meuperfil">Meu Perfil</Link>
      </div>
    </Container>
  );
}
