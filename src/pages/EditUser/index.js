import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import UserService from '../../services/UserService';
import history from '../../history';

import {
  Container, Card, FormArea, ButtonArea,
} from './style';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Loader from '../../Components/Loader';
import FormGroup from '../../Components/FormGroup';
import Input from '../../input';
import Select from '../../select';
import Button from '../../button';

import arrowLeft from '../../assets/images/left-arrow.png';

export default function EditAnimal() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setIsUserData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const userInfo = await UserService.getUserById(id);
        setIsUserData(userInfo);
        setName(userInfo.name);
        setEmail(userInfo.email);
        setGender(userInfo.gender);
        setPhone(userInfo.phone);
        setAddress(userInfo.address);
        setCity(userInfo.city);
        setEstado(userInfo.estado);
        setCep(userInfo.cep);
        console.log(userInfo);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleUpdateUser() {
    try {
      const User = {
        name,
        email,
        phone,
        address,
        city,
        estado,
        cep,
        gender,
      };
      console.log(User);

      await UserService.updateUser(id, User);
      history.push('/meuperfil');
    } catch {
      alert('Ocorreu um erro ao atualizar o usuário');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <Card>
          <Link to="/meuperfil">
            <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
          </Link>
          <h1>Editar Informações</h1>
          <FormArea>
            <FormGroup>
              <span>Nome:</span>
              <Input
                placeholder={userData.name}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>E-mail:</span>
              <Input
                placeholder={userData.email}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>Gênero:</span>
              <Select
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value={gender}>{gender}</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <span>Telefone:</span>
              <Input
                placeholder={userData.phone}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>Endereço:</span>
              <Input
                placeholder={userData.address}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>Cidade:</span>
              <Input
                placeholder={userData.city}
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>Estado:</span>
              <Input
                placeholder={userData.estado}
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <span>CEP:</span>
              <Input
                placeholder={userData.cep}
                value={cep}
                onChange={(event) => setCep(event.target.value)}
              />
            </FormGroup>
          </FormArea>
          <ButtonArea>
            <Button onClick={handleUpdateUser}>Salvar Alterações</Button>
          </ButtonArea>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
