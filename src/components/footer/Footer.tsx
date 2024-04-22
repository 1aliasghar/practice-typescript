import React, { FC } from 'react';

// Style
import './Footer.css';

// Media

interface FooterProps {
  title?: string;
  text?: string;
}

const Footer: FC<FooterProps> = ({ title, text }) => {
  return (
    <div className="Footer">
      <div className="footerTextDiv">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="footerDivider" />
      <div className="footerCopyright">copyright © 2015-{new Date().getFullYear()} </div>
    </div>
  );
};

export default Footer;
