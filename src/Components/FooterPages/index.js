import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import { ContainerFooterHome } from './style';

import pata from '../../assets/images/pataIntro.svg';
import btnSair from '../../assets/images/btnSair.svg';

export default function FooterPages() {
  const { handleLogout } = useContext(Context);

  return (
    <ContainerFooterHome>
      <img src={pata} alt="" />
      <button type="button" onClick={handleLogout}>
        <div className="btn-content">
          <img src={btnSair} alt="" />
          <span>Sair</span>
        </div>
      </button>
    </ContainerFooterHome>
  );
}
