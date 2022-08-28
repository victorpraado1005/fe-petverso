import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import Header from '../../Components/Header';
import WelcomeSection from '../../Components/WelcomeSection';
import Animal from '../../Components/Animal';
import Footer from '../../Components/Footer';

export default function Home() {
  const { authenticated } = useContext(Context);

  if (authenticated === true) {
    const UserId = localStorage.getItem('UserID');
    console.debug(UserId);
  }

  return (
    <>
      <Header />
      <WelcomeSection />
      <Animal />
      <Footer />
    </>
  );
}
