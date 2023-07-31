import React, { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState("");
  const [lists, setLists] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    return storageJobs;
  });
  const handleLists = () => {
    setLists((prev) => {
      const jobs = [...prev, list];
      const localJob = JSON.stringify(jobs);
      localStorage.setItem("jobs", localJob);
      return jobs;
    });
    setList("");
  };
  const handleDelete = (id) => {
    console.log(id);
    const item = lists.filter((item) => item !== id);
    const kk = JSON.stringify(item);
    setLists(() => {
      localStorage.setItem("jobs", kk);
      return item || [];
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "15px" }}>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <button onClick={handleLists}>add</button>
      <ul>
        {lists.map((item, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span style={{ display: "flex", gap: "20px" }}>
                <li>{item}</li>
                <button onClick={() => handleDelete(item)}>X</button>
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;
