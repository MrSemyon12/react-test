import { add, del } from "./types/postTypes";

export function addPost(post) {
  return { type: add, payload: post };
}

export function deletePost(id) {
  return { type: del, payload: id };
}
