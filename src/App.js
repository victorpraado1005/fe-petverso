import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import history from './history';
import defaultTheme from './assets/styles/Themes/default';

import GlobalStyles from './assets/styles/global';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
