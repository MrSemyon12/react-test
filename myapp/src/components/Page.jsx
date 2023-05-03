import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "../store/actions/actionPost";
import Post from "./Post";

let id = 0;
export default function Page() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          ++id;
          dispatch(addPost({ id: id, title: "hello" }));
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(deletePost(id));
          --id;
        }}
      >
        DELETE
      </button>
      {posts.posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
