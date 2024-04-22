import React, { FC } from 'react';

// Style
import './Hero.css';

// Media
// import logo from '../../assets/home/react-logo.svg';
import globe from '../../assets/home/globe1.png';

interface HeroProps {
  title?: string;
  text?: string;
}

const Hero: FC<HeroProps> = ({ title, text }) => {
  return (
    <div className="Hero">
      <header className="Hero-header">
        <h4 className="text-5xl">{title}</h4>
        <p className="text-1xl">{text ?? ''}</p>
        <button>apna samjo</button>
      </header>
      <header className="Hero-header-img">
        <img src={globe} className="Hero-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Hero;
