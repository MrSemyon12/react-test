import { React, useState } from "react";
import Todo from "./Todo";
import Form from "./Form";

export default function TodoList() {
  const [todos, setTodo] = useState([
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
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.doneFlag = !todo.doneFlag;
        }
        return todo;
      })
    );
  };

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  return (
    <>
      <Form func={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} func={changeDone} />
      ))}
    </>
  );
}
