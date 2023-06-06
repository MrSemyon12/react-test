import React from "react";
import PostItem from "./PostItem";
import { myContext } from "./myContext";

export default function PostContainer() {
  return (
    <myContext.Consumer>
      {(value) =>
        value.state.map((post) => (
          <PostItem
            title={post.title}
            body={post.body}
            onClick={() => value.deletePost(post.id)}
          />
        ))
      }
    </myContext.Consumer>
  );
}
