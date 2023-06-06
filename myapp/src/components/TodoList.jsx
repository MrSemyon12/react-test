import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../stores/TodoStore";
import Todo from "./Todo";

export default observer(function TodoList() {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    todoStore.add({ id: Date.now(), title: title, done: false });
  };
  return (
    <div style={{ width: "500px" }}>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%" }}
        />
        <button onClick={() => handleAdd()}>Add</button>
      </div>

      {todoStore.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
