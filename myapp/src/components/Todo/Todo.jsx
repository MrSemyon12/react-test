import React from "react";
import styles from "./styles.module.scss";

export default function Todo(props) {
  return (
    <div className={styles.block}>
      <div
        className={
          props.doneFlag
            ? [styles.todo, styles.color_grey].join(" ")
            : styles.todo
        }
      >
        <h1>{props.taskTitle}</h1>
        <h3>{props.taskDescription}</h3>
      </div>
      <button
        onClick={() => props.func(props.id)}
        style={{ width: 100, height: 30, background: "brown" }}
      >
        <h4>{props.doneFlag ? "Сделано" : "Не сделано"}</h4>
      </button>
    </div>
  );
}
