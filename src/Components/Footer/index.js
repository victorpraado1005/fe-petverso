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
        <Link to="/animals">Animal</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/consultas">Consultas</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/parques">Parques</Link>
      </div>
      <LineWhite />
      <div>
        <Link to="/">Sair</Link>
      </div>
    </Container>
  );
}
