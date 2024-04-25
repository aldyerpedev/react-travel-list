import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [goodsList, setGoodsList] = useState([]);

  function addGoods(good) {
    setGoodsList((goodsList) => [...goodsList, good]);
  }

  function deleteGoods(id) {
    setGoodsList((goodsList) => goodsList.filter((good) => id !== good.id));
  }

  function toggleItem(id) {
    setGoodsList((goodsList) =>
      goodsList.map((good) =>
        id === good.id ? { ...good, packed: !good.packed } : good
      )
    );
  }

  function clearList() {
    const clearConfirmation = window.confirm(
      "Do you want to clear all goods in your bag?"
    );

    if (clearConfirmation) setGoodsList([]);
  }

  return (
    <div>
      <h1 className="main-title">ReactJS Travel List by Aldy Rizky Putra</h1>
      <div className="container">
        <Logo />
        <Form onAddGoods={addGoods} />
        <PackingList
          goodsList={goodsList}
          onDeleteGoods={deleteGoods}
          onToggleItem={toggleItem}
          onClearList={clearList}
        />
        <Stats goods={goodsList} />
      </div>
    </div>
  );
}
