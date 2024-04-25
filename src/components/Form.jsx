import { useState } from "react";

export default function Form({ onAddGoods }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return null;

    const newGoods = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    onAddGoods(newGoods);

    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you want to add?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Ex. Toothpaste"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
