import Todo from "./Todo";
import "../css/App.css";

function App() {
  const todos = [
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
      doneFlag: false,
    },
  ];

  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default App;
