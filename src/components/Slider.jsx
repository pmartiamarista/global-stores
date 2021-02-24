import { useGlobalHook } from "@devhammed/use-global-hook";
import { useEffect } from "react";
import { SLIDER_STORE } from "../context/slider/slider-store";

const Slider = () => {
  const [{ count }, dispatch, { changeValue }] = useGlobalHook(SLIDER_STORE);

  useEffect(() => {
    console.log("Slider mounted");
    return () => {
      console.log("Slider unmounted");
    };
  }, []);

  return (
    <div className="box">
      <div className="column px-1 pb-0" style={{ textAlign: "center" }}>
        <input
          className="slider has-output is-fullwidth"
          id="sliderWithValue"
          step="1"
          min="0"
          max="100"
          value={count}
          type="range"
          onChange={({ nativeEvent }) =>
            changeValue(dispatch, nativeEvent.target.value)
          }
        />
        <output htmlFor="sliderWithValue">{count}</output>
      </div>
    </div>
  );
};

export default Slider;
