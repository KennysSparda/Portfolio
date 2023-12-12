import React, { useEffect } from 'react';
import Container from '../container/Container';
import BtnProjects from '../buttons/btnProjects';
import BtnGithub from '../buttons/btnGithub';
import BtnLinkedin from '../buttons/btnLinkedin';
import Perfil from '../perfil/Perfill';

export default function Home() {
  const playAudio = async () => {
    try {
      const audio = new Audio('/audio/ShootingStars.mp3');
      audio.volume = 0.05;
      await audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
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
  }, []);

  return (
    <Container>
      <div id="home">
        <div id="boxHome">
          <div id="boxHomeLeft">
            <Perfil />
          </div>
          <div id="boxHomeRight">
            <div id="content-right">
              <BtnProjects />
              <BtnGithub />
              <BtnLinkedin />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}