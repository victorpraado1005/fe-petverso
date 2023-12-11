import { useNavigate } from 'react-router-dom';

import { Container } from './style';

import Button from '../../button';
import NotFound from '../../assets/images/404.svg';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Page Not Found</h1>
      <img src={NotFound} alt="" width={400} height={400} />
      <Button onClick={() => navigate('/')}>Home</Button>
    </Container>
  );
}
