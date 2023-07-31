import { useCallback, useRef, useState } from "react";

// sử dụng Hook, hỗ trợ thêm nhiều tính năng
function ComponentB() {
  // useState
  const [first, setfirst] = useState(second);
  // useEffect
  useEffect(() => {}, [deps]);
  // useLayoutEffect
  useLayoutEffect(() => {}, [third]);
  // useRef
  const ref = useRef(second);
  // useCallback
  useCallback(() => {}, [second]);
  //..
  return <h1>hook</h1>;
}
