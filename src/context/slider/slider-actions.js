const actions = {
  changeValue(dispatch, payload) {
    dispatch({ type: "change", payload });
  },
  reset(dispatch) {
    dispatch({ type: "reset" });
  },
};

export default actions;
