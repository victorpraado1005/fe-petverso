import { Link } from 'react-router-dom';

import { Container, LineWhite } from './style';

import home from '../../assets/images/home.png';
import animals from '../../assets/images/animals.png';
import porperto from '../../assets/images/porperto.png';
import petshop from '../../assets/images/petshop.png';
import user from '../../assets/images/user.png';

export default function Footer() {
  return (
    <Container>
      <Link to="/home">
        <div className="container-option-footer">
          <img src={home} alt="Home" />
          Home
        </div>
      </Link>
      <LineWhite />
      <Link to="/animals">
        <div className="container-option-footer">
          <img src={animals} alt="Home" />
          Animais
        </div>
      </Link>
      <LineWhite />
      <Link to="/porperto">
        <div className="container-option-footer">
          <img src={porperto} alt="Home" />
          O que tem por perto?
        </div>
      </Link>
      <LineWhite />
      <Link to="/lojas">
        <div className="container-option-footer">
          <img src={petshop} alt="Home" />
          PetShops
        </div>
      </Link>
      <LineWhite />
      <Link to="/meuperfil">
        <div className="container-option-footer">
          <img src={user} alt="Home" />
          Meu Perfil
        </div>
      </Link>
    </Container>
  );
}
