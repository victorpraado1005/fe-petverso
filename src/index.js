import * as dotenv from 'dotenv';
import ReactDOM from 'react-dom/client';
import App from './App';

dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);
