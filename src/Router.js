import { Routes, Route } from 'react-router-dom';

import { AuthGuard } from './AuthGuard';

import Layout from './Components/Layout';

import Login from './pages/Login';
import Home from './pages/Home';
import Animal from './pages/Animal';
import Vaccine from './pages/Vaccine';
import Medication from './pages/Medication';
import EditAnimal from './pages/EditAnimal';
import AddAnimal from './pages/AddAnimal';
import CreateVaccine from './pages/CreateVaccine';
import CreateMedication from './pages/CreateMedication';
import PorPerto from './pages/PorPerto';
import CreateConsultaForm from './Components/CreateConsultaForm';
import CreateBanho from './Components/CreateBanho';
import MeuPerfil from './pages/MeuPerfil';
import EditUser from './pages/EditUser';
import Lojas from './pages/Lojas';
import Pedidos from './pages/Pedidos';
import Assinatura from './pages/Assinatura';
import TodosPedidos from './pages/TodosPedidos';
import Agendamentos from './pages/Agendamentos';
import Teste from './pages/Teste';

export default function Router() {
  return (
    <Routes>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/auth" element={<Login />} />
        <Route path="/assinatura" element={<Assinatura />} />
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animal />} />
          <Route path="/editAnimal/:id" element={<EditAnimal />} />
          <Route path="/addAnimal" element={<AddAnimal />} />
          <Route path="/vacinas/:id" element={<Vaccine />} />
          <Route path="/addVacinas/:id" element={<CreateVaccine />} />
          <Route path="/medicamentos/:id" element={<Medication />} />
          <Route path="/addMedicamento/:id" element={<CreateMedication />} />
          <Route path="/porperto" element={<PorPerto />} />
          <Route path="/addconsulta/:clinica" element={<CreateConsultaForm />} />
          <Route path="/banho/:petshop" element={<CreateBanho />} />
          <Route path="/meuperfil" element={<MeuPerfil />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/pedidos/:loja" element={<Pedidos />} />
          <Route path="/todospedidos/:id" element={<TodosPedidos />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/teste" element={<Teste />} />
        </Route>
      </Route>
    </Routes>
  );
}
