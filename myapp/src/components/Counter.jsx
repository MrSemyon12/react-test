import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../stores/CounterStore";

export default observer(function Counter() {
  return (
    <div>
      <h1>{counterStore.counter}</h1>
      <button onClick={() => counterStore.increment()}>INC</button>
      <button onClick={() => counterStore.decrement()}>DEC</button>
    </div>
  );
});
