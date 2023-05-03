const initState = {
  counter: 0,
};

export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.payload };
    case "DECREMENT":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
}
