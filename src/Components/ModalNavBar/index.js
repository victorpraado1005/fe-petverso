import ReactDOM from 'react-dom';

import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import {
  Overlay, Container, ButtonArea, CloseModalArea, ButtonsFooter,
} from './style';

import close from '../../assets/images/close.svg';
import logout from '../../assets/images/logoutRight.svg';

import Button from '../../button';

export default function ModalNavBar({
  visible, onClose, onClickHome, onClickAnimals,
  onClickLocation, onClickPetShops, onClickAccount,
}) {
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
          <Button type="button" onClick={onClickHome}>Home</Button>
          <Button type="button" onClick={onClickAnimals}>Animais</Button>
          <Button type="button" onClick={onClickLocation}>Por perto</Button>
          <Button type="button" onClick={onClickPetShops}>PetShop`s</Button>
          <Button type="button" onClick={onClickAccount}>Conta</Button>
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
