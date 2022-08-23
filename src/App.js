import { Router } from 'react-router-dom';

import Routes from './Routes';
import history from './history';

import GlobalStyles from './assets/styles/global';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
