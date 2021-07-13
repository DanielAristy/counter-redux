import { INCREMENTED, DECREMENTED, RESET } from "../components/Constants";

/**Reducer */
export function reducerCounter(state = 0, action) {
  switch (action.type) {
    case INCREMENTED:
      return state + 1;
    case DECREMENTED:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}
