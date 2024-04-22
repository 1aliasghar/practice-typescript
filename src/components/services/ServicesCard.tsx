import React, { FC } from 'react';

// Style
import './Services.css';
import service from '../../assets/home/services.jpg.avif';

// Media

interface ServicesCardProps {
  title?: string;
  text?: string;
}

const ServicesCard: FC<ServicesCardProps> = ({ title, text }) => {
  return (
    <div className="ServicesCard">
      <div className="ServicesCardImgDiv">
        <img src={service} alt="service" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServicesCard;
