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
        <Link to="/porperto">Por perto</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/assinatura">Assinatura</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/">Sair</Link>
      </div>
    </Container>
  );
}
