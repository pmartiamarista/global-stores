export const initialState = {
  count: 0,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...state, count: payload };
    default: {
      console.log(`Unhandled action type: ${type}`);
      return state;
    }
  }
};
