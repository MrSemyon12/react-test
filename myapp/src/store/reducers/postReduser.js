import { add, del } from "../actions/types/postTypes";

const initState = {
  posts: [],
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case add:
      return { ...state, posts: [...state.posts, action.payload] };
    case del:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}
