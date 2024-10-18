import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HamburgerProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu, isOpen }) => {

  return (
    <div className='hidden max-900:block'>
      <IconButton
        color="inherit"
        onClick={toggleMenu}
        className={isOpen ? 'open' : ''}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default Hamburger;
