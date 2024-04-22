import React, { FC } from 'react';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import Footer from '../../components/footer/Footer';

const Home: FC = () => {
  return (
    <>
      <Navbar logo="logo" />
      <Hero
        title="Welcome to the nakli universe"
        text="Earth, our blue planet, is a mesmerizing oasis in the vastness of space. With its rich diversity of landscapes, from lush forests to arid deserts, and its intricate ecosystems supporting a kaleidoscope of life, Earth is a precious gem in the cosmos. Its beauty and complexity inspire awe and reverence."
      />
      <Services title="Services We Provide" />
      <Footer title="asdasd" />
    </>
  );
};

export default Home;
