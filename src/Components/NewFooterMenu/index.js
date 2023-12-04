import { useContext, useState } from 'react';

import { Context } from '../../Context/AuthContext';

import { Container } from './style';

import Button from '../../button';

import logo from '../../assets/images/logoOficial.svg';
import menuBurguer from '../../assets/images/menu_burguer.svg';
import ModalNavBar from '../ModalNavBar';

export default function NewFooterMenu() {
  const { handleLogout } = useContext(Context);
  const [isModalNavBarVisible, setIsModalNavBarVisible] = useState(false);

  function handleOpenModalNavBar() {
    setIsModalNavBarVisible(true);
  }

  function handleCloseModalNavBar() {
    setIsModalNavBarVisible(false);
  }

  return (
    <>
      <ModalNavBar
        visible={isModalNavBarVisible}
        onClose={handleCloseModalNavBar}
      />
      <Container>
        <img src={logo} alt="Logo PetVerso" height={55} width={120} />
        <button type="button" onClick={handleOpenModalNavBar} className="iconMenu">
          <img src={menuBurguer} alt="Icone Menu Burguer" width={32} height={32} />
        </button>
        <div className="navBar">
          <Button type="button"><a href="https://site-petverso.vercel.app/#contato" target="_blank" rel="noreferrer">Contato</a></Button>
          <Button type="button" className="delete-button" onClick={handleLogout}>Sair</Button>
        </div>
      </Container>
    </>
  );
}
