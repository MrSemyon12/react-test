import React, { useRef } from "react";

export default function UseRefButton() {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    const x =
      Math.random() * (window.innerWidth - buttonRef.current.clientWidth);
    const y =
      Math.random() * (window.innerHeight - buttonRef.current.clientHeight);

    const button = buttonRef.current;
    button.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      style={{ transition: "0.5s" }}
    >
      UseRefButton
    </button>
  );
}
