export const initialState = {
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
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
      console.log(`Unhandled action type: ${action.type}`);
      return { ...state };
    }
  }
};
