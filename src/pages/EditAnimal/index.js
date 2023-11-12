import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import AnimalsService from '../../services/AnimalsService';
import history from '../../history';

import { Container } from './style';

import Header from '../../Components/Header/index';
import AnimalForm from '../../Components/AnimalForm';
import Footer from '../../Components/Footer/index';
import Loader from '../../Components/Loader';

import ToastContainer from '../../Components/Toast/ToastContainer';
import toast from '../../utils/toast';

export default function EditAnimal() {
  const [isLoading, setIsLoading] = useState(true);
  const [animalName, setAnimalName] = useState('');
  const animalFormRef = useRef(null);
  const { data } = useContext(Context);
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
    try {
      const animal = {
        name: formData.name,
        breed: formData.breed,
        gender: formData.gender,
        weight_animal: formData.weight,
        lenght_animal: formData.lenght,
        species: formData.species,
        nickname: formData.nickName,
        users_id: data.user.id,
      };

      const animalData = await AnimalsService.updateAnimal(id, animal);

      setAnimalName(animalData.name);

      history.push('/animals');
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o animal.',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <ToastContainer />
      <Header />
      <Container>
        <AnimalForm
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
