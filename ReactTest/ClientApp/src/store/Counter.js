const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const multiplyCountType = 'MULTIPLY_COUNT';
const initialState = { count: 1 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
  multiply: () => ({ type: multiplyCountType })
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === multiplyCountType) {
      return { ...state, count: state.count * 2 };
  }

  return state;
};
