import { Container } from './style';

import AnimalService from '../../services/AnimalsService';

import Header from '../../Components/Header';
import ContactFormAnimal from '../../Components/AnimalForm';
import Footer from '../../Components/Footer';

export default function AddAnimal() {
  async function handleSubmit(formData) {
    const userId = localStorage.getItem('UserID');

    try {
      const animal = {
        name: formData.name,
        breed: formData.breed,
        gender: formData.gender,
        weight_animal: formData.weight,
        length_animal: formData.lenght,
        species: formData.species,
        nickname: formData.nickname,
        users_id: userId,
      };
      const response = await AnimalService.createAnimal(animal);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o animal');
    }
  }

  return (
    <Container>
      <Header />
      <ContactFormAnimal
        titleLabel="Criar Animal"
        buttonLabel="Criar Animal"
        onSubmit={handleSubmit}
      />
      <Footer />
    </Container>
  );
}
