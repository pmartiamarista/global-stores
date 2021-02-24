import { useMemo, useReducer } from "react";
import { createGlobalHook } from "@devhammed/use-global-hook";
import { initialState, reducer } from "./slider-reducer";
import actions from "./slider-actions";

export const SLIDER_STORE = "sliderStore";

export const sliderStoreHook = createGlobalHook(SLIDER_STORE, () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });
  const [memoState, memoDispatch] = useMemo(() => [state, dispatch], [state]);

  return [memoState, memoDispatch, actions];
});
