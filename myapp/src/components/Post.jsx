import React from "react";
import img from "../static/buz.jpg";
import "../css/Post.css";

export default function Post(props) {
  const title = "Hello";
  const body =
    "ipsum dolor sit amet consectetur adipisicing elit. Sed modi nostrum aperiam doloribus labore voluptatum animi nam, est esse numquam ipsum tempora earum laborum. Voluptate expedita est dolore aspernatur doloribus?";
  const flag = true;

  return (
    <div className={flag ? "bg_green" : "none"}>
      <h1>{title}</h1>
      <hr />
      <h2>{body}</h2>
      <img src={img} alt="no pic" />
    </div>
  );
}
