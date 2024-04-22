import React, { FC } from 'react';

// Style
import './Navbar.css';
import BasicModal from '../modal/BasicModal';

// Media

interface NavbarProps {
  logo: string;
}

const Navbar: FC<NavbarProps> = ({ logo }) => {
  return (
    <div className="Navbar">
      <div className="logoText">{logo}</div>
      <div className="menuText">
        <BasicModal />
      </div>
    </div>
  );
};

export default Navbar;
