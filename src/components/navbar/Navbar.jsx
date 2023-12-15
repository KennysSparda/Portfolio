import React, { useState, useEffect } from 'react';
import BtnMenu from '../buttons/btnMenu'
import Menu from './Menu'
import Icon from '../icon/Icon'

export default function Navbar() {
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);

  const playAudio = async () => {
    try {
      if (!audio) {
        const newAudio = new Audio('/audio/ShootingStars.mp3');
        setAudio(newAudio);
      }

      audio.volume = isMuted ? 0 : 0.05;

      if (!isMuted) {
        await audio.play();
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  useEffect(() => {
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, [isMuted, audio]);

  // Start navbar empty
  const [show, setShow] = useState(false);

  // function to toggle Show / Hide navbar
  const showMenu = () => {
    setShow(!show)
  }

  // Verify if main button is pressed
  if (show == true) {
    return (
      <header className="navbar-body">
        <div className="navbar">
        <h2 id="title">Portfolio</h2>
        <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        <Menu function={showMenu} muteVar={isMuted} muteFunction={toggleMute} />
        </div>
      </header>
    )
  } else {
    return (
      <header className="navbar-body">
        <div className="navbar">
          <h2 id="title">Portfolio</h2>
          <BtnMenu function={showMenu}><Icon type={5}></Icon></BtnMenu>
        </div>
      </header>
    )
  }
}
