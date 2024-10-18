import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HamburgerProps {
  hamburgerMenuRef: React.RefObject<HTMLDivElement | null>; // Accepting a ref as a prop
}

const Hamburger: React.FC<HamburgerProps> = ({ hamburgerMenuRef }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Specify type for state

  const toggleMenu = () => {
    if (hamburgerMenuRef.current) {
      hamburgerMenuRef.current.classList.toggle('hidden');
    }
    setIsOpen((prev) => !prev);
  };

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
