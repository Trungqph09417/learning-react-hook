import React, { useEffect, useState } from "react";

const UseEffectTimer = () => {
  const [countDown, setcountDown] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setcountDown((prev) => prev - 1);
      console.log("coudown");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{countDown}</div>;
};

export default UseEffectTimer;
