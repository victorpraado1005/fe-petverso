import { useState } from 'react';

import { Container, InputArea } from './style';

import Header from '../../Components/Header';
import PetshopsList from '../../Components/PetshopsList';
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

  console.log({ zoneSelected });

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
        <PetshopsList />
      </Container>
      <Footer />
    </>
  );
}
