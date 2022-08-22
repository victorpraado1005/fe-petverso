import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const email = 'prado.victor1005@gmail.com';
  const password = 'abc123';

  const signIn = () => {
    handleLogin(email, password);
  };

  return (
    <>
      <h1>Login</h1>
      <button type="submit" onClick={signIn}>Acessar</button>
    </>
  );
}
