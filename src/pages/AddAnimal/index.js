import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import { Container } from './style';

import AnimalsService from '../../services/AnimalsService';

import ToastContainer from '../../Components/Toast/ToastContainer';

import Header from '../../Components/Header';
import AnimalForm from '../../Components/AnimalForm';
import Footer from '../../Components/Footer';
import toast from '../../utils/toast';

export default function AddAnimal() {
  const animalFormsRef = useRef(null);
  const { data } = useContext(Context);
  const navigate = useNavigate();

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
      await AnimalsService.createAnimal(animal);

      animalFormsRef.current.resetFields();

      navigate('/animals');
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o animal!',
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Header />
      <AnimalForm
        ref={animalFormsRef}
        titleLabel="Criar Animal"
        buttonLabel="Criar Animal"
        onSubmit={handleSubmit}
      />
      <Footer />
    </Container>
  );
}
