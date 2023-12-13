import { Link } from 'react-router-dom';

import { Container, IconsContainer } from './style';

import home from '../../assets/images/home.svg';
import animals from '../../assets/images/icon_pata.svg';
import porperto from '../../assets/images/location.svg';
import petshop from '../../assets/images/bag.svg';
import user from '../../assets/images/conta.svg';

export default function Footer() {
  return (
    <Container>
      <IconsContainer>
        <Link to="/">
          <div className="container-option-footer">
            <img src={home} alt="Home" />
          </div>
        </Link>
        <Link to="/animals">
          <div className="container-option-footer">
            <img src={animals} alt="Animais" />
          </div>
        </Link>
        <Link to="/porperto">
          <div className="container-option-footer">
            <img src={porperto} alt="Por perto" />
          </div>
        </Link>
        <Link to="/lojas">
          <div className="container-option-footer">
            <img src={petshop} alt="Lojas" />
          </div>
        </Link>
        <Link to="/meuperfil">
          <div className="container-option-footer">
            <img src={user} alt="Conta" />
          </div>
        </Link>
      </IconsContainer>
    </Container>
  );
}
