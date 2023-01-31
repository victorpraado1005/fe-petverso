import ReactDOM from 'react-dom/client';
import App from './App';

import './lib/EventManager';

const url = process.env.REACT_APP_API_URL;

console.log(url);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);
