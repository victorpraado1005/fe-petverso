import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const { authenticated, login, handleLogout } = useAuth();

  return (
    <Context.Provider value={{ authenticated, login, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
