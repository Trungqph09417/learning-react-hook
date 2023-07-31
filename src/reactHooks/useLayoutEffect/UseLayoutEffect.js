import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  // useEffect
  //1. Cập nhập lại state
  //2. Cập nhập lại DOM (mutated)
  //3. Render lại ui
  //4.Gọi cleanup nếu deps thay đổi
  //5. Gọi useEffect callback

  // useLayoutEffect
  // 1. cập nhập lại state
  //2 . cập nhập lại DOM
  // 3. Gọi cleanup nếu deps thay đổi(sync)
  //4. Gọi useLayoutEffect callback(sync)
  //5. Render lại UI

  const [count, setcount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) setcount(0);
  }, [count]);

  const handleOnclick = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={handleOnclick}>run</button>
    </div>
  );
};

export default UseLayoutEffect;
