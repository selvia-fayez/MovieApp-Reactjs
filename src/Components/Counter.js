import React, { useContext, useState } from "react";
//import { counterContext } from "../config/counterContext";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../Redux/countSlice";
import { useSelector } from "react-redux";

function Counter() {
  //let { count, setCount } = useContext(counterContext);
  let count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  function increase() {
    dispatch(increaseCount());
  }
  function decrease() {
    dispatch(decreaseCount());
  }
  return (
    <div className="container text-center">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button className="btn btn-success mx-2" onClick={decrease}>
        -
      </button>
      <button className="btn btn-success mx-2" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
