import { useGlobalHook } from "@devhammed/use-global-hook";
import { useEffect } from "react";
import { SLIDER_STORE } from "../context/slider/slider-store";

const Slider = () => {
  const [{ count }, dispatch, { changeValue, reset }] = useGlobalHook(SLIDER_STORE);

  useEffect(() => {
    console.log("Slider mounted");
    return () => {
      console.log("Slider unmounted");
    };
  }, []);

  const changeInputValue = ({ nativeEvent }) => changeValue(dispatch, nativeEvent.target.value);

  return (
    <div className="box">
      <div className="column px-1 pb-0" style={{ textAlign: "center" }}>
        <div
          className="column is-align-self-center"
          style={{ textAlign: "center" }}
        >
          <h2 className="subtitle is-2">{count}</h2>
        </div>
        <div
          className="column is-align-self-center"
          style={{ textAlign: "center" }}
        >
          <input
            style={{ width: "100%" }}
            className="slider has-output is-fullwidth"
            id="sliderWithValue"
            step="1"
            min="0"
            max="100"
            value={count}
            type="range"
            onChange={changeInputValue}
          />
        </div>
        <div className="column p-0" style={{ textAlign: "center" }}>
          <button
            className="button is-danger"
            onClick={() => reset(dispatch)}
            children="RESET"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
