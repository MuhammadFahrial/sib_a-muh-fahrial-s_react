// Seperti biasa, untuk functional component kita hanya membutuhkan hooks. Hook yang akan kita gunakan adalah useSelector untuk connect ke store dan useDispatch untuk melakukan dispatch

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./counterSlice";
import { useState } from "react";

// Implementasi hooks
const CounterFn = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch(); //

  // Gunakan useState untuk incrementAmount
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  return (
    <div className="demo">
      <h1>Function Component Counter</h1>
      <h1 id="counter">{count}</h1>
      <button id="counter" onClick={() => dispatch(decrement())}>
        -
      </button>

      <button id="counter" onClick={() => dispatch(increment())}>
        +
      </button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button
        id="increment"
        onClick={() => dispatch(incrementByAmount({ amount: addValue }))}
      >
        Add Amount
      </button>
      <hr />
    </div>
  );
};

export default CounterFn;
