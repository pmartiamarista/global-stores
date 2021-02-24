export const initialState = {
  count: 0,
};

export const reducer = (state, { type }) => {
  switch (type) {
    case "reset":
      return { ...initialState };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      console.log(`Unhandled action type: ${type}`);
      return state;
    }
  }
};
