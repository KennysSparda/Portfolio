import { useState, useEffect } from 'react';

const useNavbarVisibility = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if ((prevScrollPos > currentScrollPos && currentScrollPos > 0) || currentScrollPos === 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showNavbar;
};

export default useNavbarVisibility;

