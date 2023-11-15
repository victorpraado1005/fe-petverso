import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics';

import Routes from './Routes';
import history from './history';
import defaultTheme from './assets/styles/Themes/default';

import GlobalStyles from './assets/styles/global';

import { AuthProvider } from './Context/AuthContext';

// import ToastContainer from './Components/Toast/ToastContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <GlobalStyles />
          {/* <ToastContainer /> */}
          <Router history={history}>
            <Routes />
            <Analytics />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
