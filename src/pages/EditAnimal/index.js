import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import AnimalsService from '../../services/AnimalsService';
import history from '../../history';

import { Container } from './style';

import Header from '../../Components/Header/index';
import ContactFormAnimal from '../../Components/AnimalForm';
import Footer from '../../Components/Footer/index';
import Loader from '../../Components/Loader';

export default function EditAnimal() {
  const [isLoading, setIsLoading] = useState(true);
  const [animalName, setAnimalName] = useState('');
  const animalFormRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadAnimal() {
      try {
        const animalData = await AnimalsService.getAnimalById(id);

        animalFormRef.current.setFieldsValues(animalData);
        setIsLoading(false);
        setAnimalName(animalData.name);
      } catch (error) {
        console.log(error);
        history.push('/home');
      }
    }

    loadAnimal();
  }, [id]);

  async function handleSubmit(formData) {
    const userId = localStorage.getItem('UserID');

    try {
      const animal = {
        name: formData.name,
        breed: formData.breed,
        gender: formData.gender,
        weight_animal: formData.weight,
        lenght_animal: formData.lenght,
        species: formData.species,
        nickname: formData.nickName,
        users_id: userId,
      };

      const animalData = await AnimalsService.updateAnimal(id, animal);
      setAnimalName(animalData.name);
    } catch {
      alert('Ocorreu um erro ao atualizar o animal');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <ContactFormAnimal
          ref={animalFormRef}
          titleLabel={isLoading ? 'Carregando...' : `Editar ${animalName}`}
          buttonLabel="Salvar Alterações"
          onSubmit={handleSubmit}
        />
      </Container>
      <Footer />
    </>
  );
}
