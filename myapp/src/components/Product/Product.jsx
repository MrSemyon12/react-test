import React, { useRef, useState } from "react";
import style from "./style.module.css";

export default function Product({ title, desc }) {
  const descRef = useRef(null);
  const [isDescShown, setIsDescShown] = useState(false);

  const handleShowDescription = () => {
    setIsDescShown(!isDescShown);
  };

  const classes = [style.description, !isDescShown ? style.hide : ""];
  return (
    <div>
      <h1>{title}</h1>
      <div ref={descRef} className={classes.join(" ")}>
        <h4>{desc}</h4>
      </div>
      <button onClick={handleShowDescription}>Описание</button>
    </div>
  );
}
