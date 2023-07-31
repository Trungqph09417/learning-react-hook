import React, { useReducer, useState } from "react";
// useState
// 1. Init state :0
// 2. Actions :Tăng(+1) / Giam(-1)
// useReducer
// 1. Init state :0
// 2. Actions :Tăng(+1) / Giam(-1)
// 3. Reducer
// 4. Dispath

const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid actions");
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(UP_ACTION)}>Tăng</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Giảm</button>
    </div>
  );
};

export default UseReducer;
