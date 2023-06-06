import React from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../stores/TodoStore";

export default observer(function Todo({ id, title, done }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>{title}</h2>
      <h2>-{done.toString()}</h2>
      <button onClick={() => todoStore.setDone(id)}>SetDone</button>
      <button onClick={() => todoStore.remove(id)}>Remove</button>
    </div>
  );
});
