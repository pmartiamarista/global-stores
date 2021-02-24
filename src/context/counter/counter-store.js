import { useMemo, useReducer } from "react";
import { createGlobalHook } from "../../hooks/useGlobalHook";
import { initialState, reducer } from "./counter-reducer";
import actions from "./counter-actions";

export const COUNTER_STORE = "counterStore";

export const counterStoreHook = createGlobalHook(COUNTER_STORE, () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });
  const [memoState, memoDispatch] = useMemo(() => [state, dispatch], [state]);

  return [memoState, memoDispatch, actions];
});
