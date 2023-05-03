import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/actionCounter.js";

export default function GlobalStateClicker({ inc }) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter.counter}</h1>
      <button onClick={() => dispatch(increment(inc))}>INCREMENT</button>
      {/* <h1>{counter.counter}</h1>
      <button onClick={() => dispatch(decrement(inc))}>DECREMENT</button> */}
    </div>
  );
}
