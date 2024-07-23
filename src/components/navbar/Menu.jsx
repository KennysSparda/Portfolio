import React from 'react';
import ButtonHome from '../buttons/btnHome';
import BtnAbout from '../buttons/btnAbout';
import BtnProjects from '../buttons/btnProjects';

const Menu = ({ closeMenu, isDesktop }) => {
  return (
    <nav
      className={`menu bg-gray-800 ${isDesktop ? 'menu-visible-desktop' : 'menu-mobile'} absolute top-16 right-0 mt-2 p-2 rounded shadow-md`}
    >
      <ButtonHome function={closeMenu} />
      <BtnProjects function={closeMenu} navbar={true} />
      <BtnAbout function={closeMenu} />
    </nav>
  );
};

export default Menu;
