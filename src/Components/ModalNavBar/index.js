import ReactDOM from 'react-dom';

import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import {
  Overlay, Container, ButtonArea, CloseModalArea, ButtonsFooter,
} from './style';

import close from '../../assets/images/close.svg';
import logout from '../../assets/images/logoutRight.svg';

import Button from '../../button';

import history from '../../history';

export default function ModalNavBar({ visible, onClose }) {
  const { handleLogout } = useContext(Context);

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
          <Button type="button" onClick={() => history.push('/animals')}>Animais</Button>
          <Button type="button" onClick={() => history.push('/porperto')}>Por perto</Button>
          <Button type="button" onClick={() => history.push('/lojas')}>PetShop`s</Button>
          <Button type="button" onClick={() => history.push('/meuperfil')}>Conta</Button>
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
