import ReactDOM from 'react-dom';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import {
  Overlay, Container, ButtonArea, CloseModalArea, ButtonsFooter,
} from './style';

import close from '../../assets/images/close.svg';
import logout from '../../assets/images/logoutRight.svg';

import Button from '../../button';

export default function ModalNavBar({ visible, onClose }) {
  const { handleLogout } = useContext(Context);
  const navigate = useNavigate();

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CloseModalArea>
          <button type="button" onClick={onClose}>
            <img src={close} alt="" width={48} height={48} />
          </button>
        </CloseModalArea>
        <ButtonArea>
          <Button type="button" onClick={onClose}>Home</Button>
          <Button type="button" onClick={() => navigate('/animals')}>Animais</Button>
          <Button type="button" onClick={() => navigate('/porperto')}>Por perto</Button>
          <Button type="button" onClick={() => navigate('/lojas')}>PetShop`s</Button>
          <Button type="button" onClick={() => navigate('/meuperfil')}>Conta</Button>
        </ButtonArea>
        <ButtonsFooter>
          <Button type="button"><a href="https://site-petverso.vercel.app/#contato" target="_blank" rel="noreferrer">Contato</a></Button>
          <button className="logout" onClick={handleLogout} type="button">
            <img src={logout} alt="" width={24} height={24} />
            Sair
          </button>
        </ButtonsFooter>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
