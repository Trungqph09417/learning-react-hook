import React, { useMemo, useState, useRef } from "react";

const UseMeMo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const reusults = products.reduce((result, prod) => {
      console.log("Bị tính toán lại");
      return result + prod.price;
    }, 0);
    return reusults;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <span>Total: {total}</span>
      <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseMeMo;
