import { useState } from 'react';

import { Container, InputArea, ListArea } from './style';

import Header from '../../Components/Header';
import PetshopsList from '../../Components/PetshopsList';
import VeterinariosList from '../../Components/VeterinariosList';
import ParquesList from '../../Components/ParquesList';
import Footer from '../../Components/Footer';

export default function PorPerto() {
  const [zoneSelected, setIsZoneSelected] = useState('');
  const [petShopSelected, setIsPetShopSelected] = useState('');
  const [veterinarioSelected, setIsVeterinarioSelected] = useState('');
  const [parquesSelected, setIsParquesSelected] = useState('');

  function handleOptionPetShop() {
    if (petShopSelected === 'desmarcado') {
      return setIsPetShopSelected('PetShop');
    }
    setIsPetShopSelected('desmarcado');
  }

  function handleOptionVeterinario() {
    if (veterinarioSelected === 'desmarcado') {
      return setIsVeterinarioSelected('Veterinario');
    }
    setIsVeterinarioSelected('desmarcado');
  }

  function handleOptionParques() {
    if (parquesSelected === 'desmarcado') {
      return setIsParquesSelected('Parques');
    }
    setIsParquesSelected('desmarcado');
  }

  function handleOptionZonaSul() {
    setIsZoneSelected('Zona Sul');
  }

  function handleOptionZonaLeste() {
    setIsZoneSelected('Zona Leste');
  }

  function handleOptionZonaOeste() {
    setIsZoneSelected('Zona Oeste');
  }

  function handleOptionZonaNorte() {
    setIsZoneSelected('Zona Norte');
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Confira os Petshops, Clinicas e Parques na sua região:</h1>
        <InputArea>
          <input
            type="checkbox"
            name="petshop"
            value="petshop"
            defaultChecked
            onClick={handleOptionPetShop}
          />
          <span>PetShop</span>
          <input
            type="checkbox"
            name="veterinario"
            value="veterinario"
            defaultChecked
            onClick={handleOptionVeterinario}
          />
          <span>Veterinário</span>
          <input
            type="checkbox"
            name="parques"
            value="parques"
            defaultChecked
            onClick={handleOptionParques}
          />
          <span>Parques</span>
        </InputArea>
        <InputArea>
          <input
            type="radio"
            name="regiao"
            value="zonaSul"
            defaultChecked
            onClick={handleOptionZonaSul}
          />
          <span>Zona Sul</span>
          <input
            type="radio"
            name="regiao"
            value="zonaOeste"
            onClick={handleOptionZonaOeste}
          />
          <span>Zona Oeste</span>
          <input
            type="radio"
            name="regiao"
            value="zonaLeste"
            onClick={handleOptionZonaLeste}
          />
          <span>Zona Leste</span>
          <input
            type="radio"
            name="regiao"
            value="zonaNorte"
            onClick={handleOptionZonaNorte}
          />
          <span>Zona Norte</span>
        </InputArea>
        <ListArea>
          <PetshopsList
            establishmentSelected={petShopSelected}
            zoneSelected={zoneSelected}
          />
        </ListArea>
        <ListArea>
          <VeterinariosList
            establishmentSelected={veterinarioSelected}
            zoneSelected={zoneSelected}
          />
        </ListArea>
        <ListArea>
          <ParquesList
            establishmentSelected={parquesSelected}
            zoneSelected={zoneSelected}
          />
        </ListArea>
      </Container>
      <Footer />
    </>
  );
}
