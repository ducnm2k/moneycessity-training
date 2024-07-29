import { useState } from "react";

export default function UseDemoDemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {};

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total:
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
