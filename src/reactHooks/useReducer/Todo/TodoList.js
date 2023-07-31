import React, { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./action";
//.1 init State

//2. Actions

//3. Reducer

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>Danh sách công việc</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
