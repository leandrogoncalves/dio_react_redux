import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  count: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
    case DECREMENT:
      return {
        count: state.count - 1,
      };
  }
}
