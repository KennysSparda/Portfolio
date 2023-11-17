import React, { useState, useEffect } from 'react';

const ArcoIrisComponente = () => {
  const [corIndex, setCorIndex] = useState(0);

  const coresArcoIris = [
    '#FF0000', '#FF4F00', '#FF9E00', '#FFED00', '#D4FF00', '#88FF00', '#3DFF00',
    '#00FF2B', '#00FF7A', '#00FFC9', '#00B2FF', '#0056FF', '#0007FF', '#3D00FF',
    '#8800FF', '#D400FF', '#FF00F1', '#FF0092', '#FF003E'
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCorIndex((prevIndex) => (prevIndex + 1) % coresArcoIris.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const corNova = coresArcoIris[corIndex];
    root.style.setProperty('--primary', corNova);
    root.style.setProperty('--shadow', corNova);
  }, [corIndex]); // Adiciona corIndex como dependência para reagir às mudanças
};

export default ArcoIrisComponente;