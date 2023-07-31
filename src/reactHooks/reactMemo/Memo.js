import React, { useCallback, useState } from "react";
import Content from "./Content";
// 1.memo() => Hight Order Component (HOC) ==> sử lý component để ko bị re-render ko cần thiết

//Hooks
// HOC --> bọc toàn bộ component , lưu ý nó tương thích với cả class + function component
// Render Props
// 2. useCallback() ==>
// - Reference type
// - React memo()

const Memo = () => {
  const [count, setCount] = useState(0);
  const handleOnclick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Content onIcreare={handleOnclick} />
      <h3> {count}</h3>
    </div>
  );
};

export default Memo;
