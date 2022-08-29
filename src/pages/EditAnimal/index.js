import Header from '../../Components/Header/index';
import ContactFormAnimal from '../../Components/ContactFormAnimal';
import Footer from '../../Components/Footer/index';

export default function EditAnimal() {
  return (
    <>
      <Header />
      <ContactFormAnimal
        titleLabel="Editar Animal"
        buttonLabel="Salvar Alterações"
      />
      <Footer />
    </>
  );
}
