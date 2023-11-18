import React, { useState, useEffect } from 'react';

const Rainbow = () => {
  const [corIndex, setCorIndex] = useState(0);

  const coresArcoIris = [
    // RED TO YELLOW
    '#FF0000',
    '#FF1100',
    '#FF2200',
    '#FF3300',
    '#FF4400',
    '#FF5500',
    '#FF6600',
    '#FF7700',
    '#FF8800',
    '#FF9900',
    '#FFAA00',
    '#FFBB00',
    '#FFCC00',
    '#FFDD00',
    '#FFEE00',
    '#FFFF00',

    // YELLOW TO GREEN
    '#EEFF00',
    '#DDFF00',
    '#CCFF00',
    '#BBFF00',
    '#AAFF00',
    '#99FF00',
    '#88FF00',
    '#77FF00',
    '#66FF00',
    '#55FF00',
    '#44FF00',
    '#33FF00',
    '#22FF00',
    '#11FF00',
    '#00FF00',

    // GREEN TO CYAN
    '#00FF11',
    '#00FF22',
    '#00FF33',
    '#00FF44',
    '#00FF55',
    '#00FF66',
    '#00FF77',
    '#00FF88',
    '#00FF99',
    '#00FFAA',
    '#00FFBB',
    '#00FFCC',
    '#00FFDD',
    '#00FFEE',
    '#00FFFF',

    // CYAN TO BLUE
    '#00EEFF',
    '#00DDFF',
    '#00CCFF',
    '#00BBFF',
    '#00AAFF',
    '#0099FF',
    '#0088FF',
    '#0077FF',
    '#0066FF',
    '#0055FF',
    '#0044FF',
    '#0033FF',
    '#0022FF',
    '#0011FF',
    '#0000FF',

    // BLUE TO PURPLE
    '#1100FF',
    '#2200FF',
    '#3300FF',
    '#4400FF',
    '#5500FF',
    '#6600FF',
    '#7700FF',
    '#8800FF',
    '#9900FF',
    '#AA00FF',
    '#BB00FF',
    '#CC00FF',
    '#DD00FF',
    '#EE00FF',
    '#FF00FF',

    // PURPLE TO RED
    '#FF00EE',
    '#FF00DD',
    '#FF00CC',
    '#FF00BB',
    '#FF00AA',
    '#FF0099',
    '#FF0088',
    '#FF0077',
    '#FF0066',
    '#FF0055',
    '#FF0044',
    '#FF0033',
    '#FF0022',
    '#FF0011',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCorIndex((prevIndex) => (prevIndex + 1) % coresArcoIris.length);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const corNova = coresArcoIris[corIndex];
    root.style.setProperty('--primary', corNova);
    root.style.setProperty('--shadow', corNova);
  }, [corIndex]); // Adiciona corIndex como dependência para reagir às mudanças
};

export default Rainbow;