import { Container } from './style';

export default function WelcomeSection() {
  const userName = localStorage.getItem('UserName');

  return (
    <Container>
      <span>
        Bem-Vindo,
        {' '}
        <strong>{userName}</strong>
      </span>
      <h3>
        O melhor lugar para você cuidar da saúde do seu animal!
      </h3>
    </Container>
  );
}
