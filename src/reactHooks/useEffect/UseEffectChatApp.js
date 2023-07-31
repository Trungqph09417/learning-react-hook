import React, { useState } from "react";

const lessions = [
  {
    id: 1,
    title: "React là gì?",
  },
  {
    id: 2,
    title: "SPA là?",
  },
  {
    id: 3,
    title: "React là gì?",
  },
];

const UseEffectChatApp = () => {
  const [lessionId, setlessionId] = useState(1);
  return (
    <div>
      UseEffectChatApp
      <ul>
        {lessions.map((item) => {
          return (
            <li
              onClick={() => setlessionId(item.id)}
              key={item.id}
              style={{
                color: lessionId === item.id ? "red" : "#333",
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectChatApp;
