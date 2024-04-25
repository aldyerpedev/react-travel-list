export default function Stats({ goods }) {
  if (!goods.length)
    return (
      <div className="stats">
        <p className="stats-text">
          Kindly please add some goods to your bags 🎒
        </p>
      </div>
    );

  const totalGoods = goods.length;
  const packedGoods = goods.filter((good) => good.packed).length;
  const progress = Math.round((packedGoods / totalGoods) * 100);
  return (
    <div className="stats">
      <p className="stats-text">
        {progress === 100
          ? "You already packed it all. You're ready to go ✈️"
          : `You have ${totalGoods} goods in the list and already packed ${packedGoods}${" "}goods (${progress}% Progress)`}
      </p>
    </div>
  );
}
