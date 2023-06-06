import React from "react";

export default function PostItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.body}</h3>
      <button style={{ backgroundColor: "red" }} onClick={props.onClick}>
        Delete
      </button>
    </div>
  );
}
