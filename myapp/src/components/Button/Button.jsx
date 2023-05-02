import React, { useState } from 'react';

const getRandomColor = () => {
  const rColor = () => Math.floor(Math.random() * 256);
  return `rgb(${rColor()}, ${rColor()}, ${rColor()})`;
};

export default function Button() {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [counter, setCounter] = useState(0);
  const handleButton = () => {
    setBackgroundColor(getRandomColor());
    setCounter(counter + 1);
  };

  return (
    <button
      style={{ width: 300, height: 60, backgroundColor }}
      onClick={handleButton}
    >
      <h1>
        rgbButton |
        {counter}
      </h1>
    </button>
  );
}
