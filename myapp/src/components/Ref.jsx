import React, { useRef, useState } from "react";
import image from "./logo.png";
import style from "./style.module.css";

export default function Ref() {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event) => {
    const x = -event.clientX + 100;
    const y = event.clientY + 100;
    imgRef.current.style.background = `url(${image})`;
    imgRef.current.style.backgroundPosition = `${x}px ${y}px`;
    // console.log(event.target.clientWidth);
  };

  return (
    <div>
      <img
        src={image}
        alt=""
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      <div
        className={[style.image, isVisible ? style.visible : ""].join(" ")}
        ref={imgRef}
      />
    </div>
  );
}
