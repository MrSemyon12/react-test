import { React, useReducer } from "react";
import reducer from "../../store/reducer";

export default function Clicker() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        INCREMENT
      </button>
    </div>
  );
}
