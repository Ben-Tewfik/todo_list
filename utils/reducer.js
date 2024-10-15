export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TASK":
      return { ...state, task: payload };
    default:
      return state;
  }
}
