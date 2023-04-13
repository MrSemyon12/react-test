import React from "react";
import "../css/Todo.css";
import { Button } from "antd";

export default function Todo(props) {
  return (
    <div
      className={props.doneFlag ? "color_grey todo" : "todo"}
      style={{ backgroundColor: "gold", borderRadius: "5%" }}
    >
      <h1>{props.taskTitle}</h1>

      <h2>{props.taskDescription}</h2>
      <Button />
    </div>
  );
}
