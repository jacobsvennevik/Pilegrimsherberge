import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const add = () => setcount((prev) => prev + 1);
  const subtract = () => setcount((prev) => prev - 1);

  return (
    <div className="">
      <h1 className="">
        Counter Component
      </h1>
      <h2 className="">{count}</h2>
      <div className="">
        <button
          className=""
          onClick={add}
        >
          Add
        </button>
        <button
          className=""
          onClick={subtract}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;