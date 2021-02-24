const actions = {
  decrement(dispatch) {
    dispatch({ type: "decrement" });
  },
  increment(dispatch) {
    dispatch({ type: "increment" });
  },
  reset(dispatch) {
    dispatch({ type: "reset" });
  },
};

export default actions;
