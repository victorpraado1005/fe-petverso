import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Context } from './Context/AuthContext';

export function AuthGuard({ isPrivate }) {
  const { authenticated } = useContext(Context);

  if (!authenticated && isPrivate) {
    return <Navigate to="/auth" replace />;
  }

  if (authenticated && !isPrivate) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
