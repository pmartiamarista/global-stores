const actions = {
  changeValue(dispatch, payload) {
    dispatch({ type: "change", payload });
  },
};

export default actions;
