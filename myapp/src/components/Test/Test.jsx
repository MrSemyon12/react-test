import React, { useEffect, useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(+localStorage.getItem("test") ?? 0);

  useEffect(() => {
    localStorage.setItem("test", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Загружаю компонент Test...");
    const id = setInterval(() => console.log("Дкмаю..."), 3000);
    return () => clearInterval(id);
  });

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Button</button>
    </div>
  );
}
