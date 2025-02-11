import React from 'react';
import ButtonHome from '../buttons/btnHome';
import BtnAbout from '../buttons/btnAbout';
import BtnProjects from '../buttons/btnProjects';

const Menu = ({ closeMenu, isDesktop }) => {
  return (
    <nav
      className={`menu bg-transparent bg-opacity-30 hover:bg-opacity-20 ${isDesktop ? 'menu-visible-desktop' : 'menu-mobile'} absolute top-16 right-0 mt-2 p-2 rounded`}
    >
      <ButtonHome function={closeMenu} />
      <BtnProjects function={closeMenu} navbar={true} />
      <BtnAbout function={closeMenu} />
    </nav>
  );
};

export default Menu;
