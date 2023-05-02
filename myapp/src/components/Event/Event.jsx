import { React, useState } from 'react';

const getRandomColor = () => {
  const rColor = () => Math.floor(Math.random() * 256);
  return `rgb(${rColor()}, ${rColor()}, ${rColor()})`;
};

export default function Event() {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <div
        style={{ width: '500px', height: '500px', backgroundColor }}
        onMouseEnter={() => {
          setBackgroundColor(getRandomColor());
        }}
        onMouseLeave={() => {
          setBackgroundColor(getRandomColor());
        }}
        onMouseMove={(event) => {
          setMousePos({ x: event.clientX, y: event.clientY });
        }}
      />
      <h1>
        x =
        {' '}
        {mousePos.x}
        , y =
        {' '}
        {mousePos.y}
      </h1>
    </div>
  );
}
