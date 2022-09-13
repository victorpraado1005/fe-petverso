import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Animal from './pages/Animal';
import Vaccine from './pages/Vaccine';
import Medication from './pages/Medication';
import EditAnimal from './pages/EditAnimal';
import AddAnimal from './pages/AddAnimal';
import CreateVaccine from './pages/CreateVaccine';
import CreateMedication from './pages/CreateMedication';

function CustomRoute({ isPrivate, ...rest }) {
  const logged = localStorage.getItem('UserID');

  if (isPrivate && !logged) {
    return <Redirect to="/" />;
  }

  return <Route {... rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute isPrivate exact path="/home" component={Home} />
      <CustomRoute isPrivate exact path="/animals" component={Animal} />
      <CustomRoute isPrivate exact path="/editAnimal/:id" component={EditAnimal} />
      <CustomRoute isPrivate exact path="/addAnimal" component={AddAnimal} />
      <CustomRoute isPrivate exact path="/vacinas/:id" component={Vaccine} />
      <CustomRoute isPrivate exact path="/addVacinas/:id" component={CreateVaccine} />
      <CustomRoute isPrivate exact path="/medicamentos/:id" component={Medication} />
      <CustomRoute isPrivate exact path="/addMedicamento/:id" component={CreateMedication} />
    </Switch>
  );
}
