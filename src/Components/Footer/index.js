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
      <div className="container-option-footer">
        <img src={home} alt="Home" />
        <Link to="/home">Home</Link>
      </div>
      <LineWhite />
      <div className="container-option-footer">
        <img src={animals} alt="Home" />
        <Link to="/animals">Animais</Link>
      </div>
      <LineWhite />
      <div className="container-option-footer">
        <img src={porperto} alt="Home" />
        <Link to="/porperto">O que tem por perto?</Link>
      </div>
      <LineWhite />
      <div className="container-option-footer">
        <img src={petshop} alt="Home" />
        <Link to="/lojas">PetShops</Link>
      </div>
      <LineWhite />
      <div className="container-option-footer">
        <img src={user} alt="Home" />
        <Link to="/meuperfil">Meu Perfil</Link>
      </div>
    </Container>
  );
}
