export default function Item({ item, onDeleteGoods, onToggleItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.packed ? "selected" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteGoods(item.id)}>❌</button>
    </li>
  );
}
