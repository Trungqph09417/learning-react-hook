import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "todos"];
const UseEffect = () => {
  // useEffect có 3 trường hợp sử dụng
  // 1. useEffect(callback)
  //   -luôn gọi callback mỗi khi component re-render
  //   -gọi callback sau khi component thêm element vào DOM
  // 2. useEffect(callback,[])
  //   - chỉ gọi callback 1 lần khi component mounted
  // 3. useEffect(callbac,[deps])
  //  - callback luôn được gọi mỗi khi deps thay đổi
  //-----------------
  // cách sử dụng
  // 1. callback luôn được gọi khi component mounted
  // 2. cleanup funtion  ==> luôn được gọi trước khi component unmounted
  // 3. cleanup function ==> luôn được gọi trước khi callback được gọi (trừ lần mounted)
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [scrollY, setScrollY] = useState(false);

  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Mounted !");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("unmount>>>");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("re-render");
  return (
    <div>
      UseEffect
      {widthWindow && <div>{widthWindow}</div>}
      <span>
        {tabs.map((tab) => {
          return (
            <button
              key={tab}
              style={
                type === tab ? { color: "white", background: "black" } : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          );
        })}
      </span>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        <h3>check mouted</h3>
      </div>
      <ul>
        {posts.map((item, index) => {
          return <li key={index}>{item.title || item.name}</li>;
        })}
      </ul>
      {scrollY && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          GotoTop
        </button>
      )}
    </div>
  );
};

export default UseEffect;
