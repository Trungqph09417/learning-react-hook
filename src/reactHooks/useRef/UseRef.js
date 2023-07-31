import React, { useEffect, useRef, useState } from "react";

// UseRef dùng để lưu giá trị bất kì qua 1 tham chiếu bên ngoài
// function component
const UseRef = () => {
  const [count, setcount] = useState(60);

  let timerId = useRef();
  let prevCount = useRef();
  let h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setcount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div style={{ padding: "20px" }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Top</button>
    </div>
  );
};

export default UseRef;
