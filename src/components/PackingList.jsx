import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  goodsList,
  onDeleteGoods,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortGoodsList;

  if (sortBy === "input") sortGoodsList = goodsList;

  if (sortBy === "description")
    sortGoodsList = goodsList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortGoodsList = goodsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="packing-list">
      <ul className="goods-list">
        {sortGoodsList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteGoods={onDeleteGoods}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="sort-group">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
