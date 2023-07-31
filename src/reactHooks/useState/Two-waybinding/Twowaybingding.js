import React, { useState } from "react";

const rewards = ["lenovo legion 5", "tuf gaming", "asus gaming"];

const TwoWaybingding = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState([]);
  const [checkedRdio, setCheckedRadio] = useState([]);

  // const handleOnclick = () => {
  //   setValue(rewards[Math.floor(Math.random() * rewards.length)]);
  // };
  const courses = [
    {
      id: 1,
      name: "html",
    },
    {
      id: 2,
      name: "js",
    },
  ];

  const laptop = [
    {
      id: 1,
      name: "lenovo",
    },
    {
      id: 2,
      name: "dell",
    },
    {
      id: 3,
      name: "hp",
    },
  ];
  const handleOnclick = () => {
    // call Api
    const isCheckBonus =
      laptop[Math.floor(Math.random() * laptop.length)].id === checkedRdio;
    if (isCheckBonus) {
      setValue(
        `Bạn đã trúng thưởng ${
          laptop.filter((item) => {
            if (item.id === checkedRdio) {
              return item.name;
            }
          })[0].name
        }`
      );
    } else {
      setValue("Bạn không trúng thưởng");
    }
    // const data = { data: value, dataArray: checked, dataRadio: checkedRdio };
  };

  const handleCheck = (id) => {
    setChecked((prev) => {
      const ischecked = checked.includes(id);
      if (ischecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  console.log({ data: value, dataArray: checked, dataRadio: checkedRdio });

  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        {courses.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={checked.includes(item.id)}
                onChange={() => handleCheck(item.id)}
              />
              {item.name}
            </div>
          );
        })}
      </h3>
      <hr />
      <h3>
        {laptop.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="radio"
                onChange={() => setCheckedRadio(item.id)}
                checked={checkedRdio === item.id}
              />
              {item.name}
            </div>
          );
        })}
      </h3>
      <h3>{value}</h3>
      <button onClick={handleOnclick}>Phần thưởng</button>
    </div>
  );
};

export default TwoWaybingding;
