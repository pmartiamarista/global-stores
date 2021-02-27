export const initialState = {
  count: 0,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...state, count: payload };
    case "reset":
      return { ...initialState };
    default: {
      console.log(`Unhandled action type: ${type}`);
      return state;
    }
  }
};
