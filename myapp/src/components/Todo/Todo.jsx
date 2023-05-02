import React from "react";
import PropTypes from "prop-types";
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

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  doneFlag: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};
