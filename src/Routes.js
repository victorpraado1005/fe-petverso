import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

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
    </Switch>
  );
}
