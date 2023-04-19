import Todo from "./Todo/Todo";
import Button from "./Button/Button";
import "../css/App.scss";
import { useState } from "react";

function App() {
  const [todos, setDone] = useState([
    {
      id: 1,
      taskTitle: "ДЗ",
      taskDescription:
        "Сделать домашнюю работу по математике с. 7, задания 3-6",
      doneFlag: true,
    },
    {
      id: 2,
      taskTitle: "Уборка",
      taskDescription: "Помыть полы в коридоре",
      doneFlag: false,
    },
    {
      id: 3,
      taskTitle: "Готовка",
      taskDescription: "Приготовить ужин",
      doneFlag: true,
    },
  ]);

  const changeDone = (id) => {
    setDone(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.doneFlag = !todo.doneFlag;
        }
        return todo;
      })
    );
  };

  return (
    <div className="app">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} func={changeDone} />
      ))}
    </div>
    // <Button />
  );
}

export default App;
