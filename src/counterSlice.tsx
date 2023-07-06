import { useSelector } from "react-redux";
import { useAppDispatch } from "./store";

function Counter() {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useAppDispatch();

  const increment = () => {};
  const decrement = () => {};

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button> */
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
