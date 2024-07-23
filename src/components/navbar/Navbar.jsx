import React, { useState } from 'react';
import BtnMenu from '../buttons/btnMenu';
import Menu from './Menu';
import Icon from '../icon/Icon';
import useNavbarVisibility from './hooks/useNavbarVisibility';
import useWindowSize from './hooks/useWindowSize';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showNavbar = useNavbarVisibility();
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <header
      className={`navbar-body bg-gray-800 fixed w-full transition-transform transform z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="navbar max-w-screen-lg mx-auto flex items-center justify-between p-4">
        <h2 id="title" className="text-white text-lg font-bold">Portfolio</h2>
        {!isDesktop && (
          <BtnMenu function={toggleMenu}>
            <Icon type={5} className={`text-white ${showMenu ? 'menu-opened' : ''}`} />
          </BtnMenu>
        )}
        {(showMenu || isDesktop) && <Menu closeMenu={toggleMenu} isDesktop={isDesktop} />}
      </div>
    </header>
  );
};

export default Navbar;
