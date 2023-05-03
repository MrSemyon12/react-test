import React from "react";

export default function Post({ id, title }) {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
    </div>
  );
}
