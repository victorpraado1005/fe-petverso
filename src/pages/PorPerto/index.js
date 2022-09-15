import { useState } from 'react';

import { Container, InputArea, ListArea } from './style';

import Header from '../../Components/Header';
import PetshopsList from '../../Components/PetshopsList';
import VeterinariosList from '../../Components/VeterinariosList';
import ParquesList from '../../Components/ParquesList';
import Footer from '../../Components/Footer';

export default function PorPerto() {
  const [zoneSelected, setIsZoneSelected] = useState('');

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
        <h1>Confira os petshops e parques na sua região:</h1>
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
          <h1>PetShop:</h1>
          <PetshopsList zoneSelected={zoneSelected} />
        </ListArea>
        <ListArea>
          <h1>Clínica Veterinária:</h1>
          <VeterinariosList zoneSelected={zoneSelected} />
        </ListArea>
        <ListArea>
          <h1>Parques:</h1>
          <ParquesList zoneSelected={zoneSelected} />
        </ListArea>
      </Container>
      <Footer />
    </>
  );
}
