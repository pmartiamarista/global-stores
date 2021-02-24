import { useGlobalHook } from "../hooks/useGlobalHook";
import { COUNTER_STORE } from "../context/counter/counter-store";

const Counter = ({ multiplier = 1 }) => {
  const [{ count }, dispatch, { increment, decrement, reset }] = useGlobalHook(
    COUNTER_STORE
  );

  return (
    <div>
      <button onClick={() => decrement(dispatch)}>-</button>
      <span>{count * multiplier}</span>
      <button onClick={() => increment(dispatch)}>+</button>
      <button onClick={() => reset(dispatch)}>reset</button>
    </div>
  );
};

export default Counter;
