import React, { memo } from "react";

const Content = ({ onIcreare }) => {
  console.log("re-render component");
  return (
    <div>
      {`Hello anh em `}
      <button onClick={onIcreare}>increase</button>
    </div>
  );
};

export default memo(Content);
