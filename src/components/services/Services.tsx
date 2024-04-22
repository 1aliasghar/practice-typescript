import React, { FC } from 'react';

// Style
import './Services.css';
import ServicesCard from './ServicesCard';

// Media

interface ServicesProps {
  title?: string;
  text?: string;
}

const Services: FC<ServicesProps> = ({ title, text }) => {
  return (
    <div className="Services">
      <div className="servicesHeading">
        <h2>{title}</h2>
      </div>
      <div className="seervicesCardContainer">
        <div className="seervicesCardDiv">
          <ServicesCard
            title="Web Development"
            text="Web development involves creating and maintaining websites and web applications using various technologies like HTML, CSS, and JavaScript"
          />
        </div>
        <div className="seervicesCardDiv">
          <ServicesCard
            title="App Development"
            text="App development focuses on designing and building mobile applications for platforms like iOS and Android, often using languages such as Swift, Kotlin, or React Native."
          />
        </div>
        <div className="seervicesCardDiv">
          <ServicesCard
            title="UI/UX Design"
            text="UI/UX design entails crafting intuitive and visually appealing interfaces that enhance user experience and satisfaction across digital products and platforms."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
