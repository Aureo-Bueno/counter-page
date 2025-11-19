export interface CounterState {
  counter: number;
}

export type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

const initialState: CounterState = {
  counter: 0,
};

function rootReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

export default rootReducer;
