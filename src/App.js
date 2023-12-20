import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import Router from './Router';
import defaultTheme from './assets/styles/Themes/default';

import GlobalStyles from './assets/styles/global';

import { AuthProvider } from './Context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <AuthProvider>
            <GlobalStyles />
            <Router />
            {/* <ToastContainer /> */}
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
