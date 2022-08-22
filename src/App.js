import { Router } from 'react-router-dom';

import Routes from './Routes';
import history from './history';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <h1>PetVerso</h1>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
