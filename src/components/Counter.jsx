import { useGlobalHook } from "@devhammed/use-global-hook";

import { COUNTER_STORE } from "../context/counter/counter-store";

const Counter = ({ multiplier = 1 }) => {
  const [{ count }, dispatch, { increment, decrement, reset }] =
    useGlobalHook(COUNTER_STORE);

  return (
    <div className="box">
      <div
        className="column is-align-self-center"
        style={{ textAlign: "center" }}
      >
        <h2 className="subtitle is-2">{count * multiplier}</h2>
      </div>

      <div className="columns is-mobile buttons are-medium">
        <div
          className="column column px-1 pb-0"
          style={{ textAlign: "center" }}
        >
          <button
            className="button is-info"
            onClick={() => decrement(dispatch)}
            children={`-${multiplier}`}
          />
        </div>
        <div className="column px-1 pb-0" style={{ textAlign: "center" }}>
          <button
            className="button is-success"
            onClick={() => increment(dispatch)}
            children={`+${multiplier}`}
          />
        </div>
      </div>
      <div className="column p-0" style={{ textAlign: "center" }}>
        <button
          className="button is-danger"
          onClick={() => reset(dispatch)}
          children="RESET"
        />
      </div>
    </div>
  );
};

export default Counter;
