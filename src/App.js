import React, { useState } from "react";
import TwoWaybingding from "./reactHooks/useState/Two-waybinding/Twowaybingding";
import Todolist from "./reactHooks/useState/todoList/Todolist";
import UseEffect from "./reactHooks/useEffect/UseEffect";
import UseEffectTimer from "./reactHooks/useEffect/UseEffectTimer";
import UseEffectAvartar from "./reactHooks/useEffect/UseEffectAvartar";
import UseEffectChatApp from "./reactHooks/useEffect/UseEffectChatApp";
import UseLayoutEffect from "./reactHooks/useLayoutEffect/UseLayoutEffect";
import UseRef from "./reactHooks/useRef/UseRef";
import Memo from "./reactHooks/reactMemo/Memo";
import UseMeMo from "./reactHooks/reactMemo/UseMeMo";
import UseReducer from "./reactHooks/useReducer/UseReducer";
import TodoList from "./reactHooks/useReducer/Todo/TodoList";
function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      {/** state */}
      {/* <TwoWaybingding />  */}
      {/* <Todolist /> */}
      {/*  useEffect */}
      <button onClick={() => setChecked(!checked)}>Update</button>
      {/* {checked && <UseEffect />} */}
      {/* {checked && <UseEffectTimer />} */}
      {/* {checked && <UseEffectAvartar />} */}
      {/* useLayoutEffect */}
      {/* {checked && <UseLayoutEffect />} */}
      {/* <UseRef /> */}
      {/* <Memo /> */}
      {/* <UseMeMo /> */}
      {/* <UseReducer /> */}
      <TodoList />
    </div>
  );
}

export default App;
