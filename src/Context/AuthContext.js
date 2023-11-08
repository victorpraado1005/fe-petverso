import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, login, handleLogout, userInfo,
  } = useAuth();

  return (
    <Context.Provider value={{
      authenticated, login, handleLogout, userInfo,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
