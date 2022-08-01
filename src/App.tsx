import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/main-components/Main";

export type StoreItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCart: number;
};

export type Store = StoreItem[];

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.45,
      stock:5,
      inCart: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.15,
      stock: 5,
      inCart: 0,
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      stock: 5,
      inCart: 0,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.8,
      stock: 5,
      inCart: 0,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.9,
      stock: 5,
      inCart: 0,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.6,
      stock: 5,
      inCart: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.33,
      stock: 5,
      inCart: 0,
    },
    {
      id: 8,
      name: "berry",
      price: 0.5,
      stock: 5,
      inCart: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.5,
      stock: 1,
      inCart: 0,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.75,
      stock: 1,
      inCart: 0,
    },
  ]);

  const cart = getCartItems();

  function getItemImagePath(item: StoreItem) {
    let id = String(item.id).padStart(3, "0");
    return `assets/${id}-${item.name}.svg`;
  }

  function getCartItems() {
    return store.filter((item) => item.inCart > 0);
  }



  function increaseCartQuantity(item: StoreItem) {
    if (item.stock === 0) return;
    const storeCopy = structuredClone(store);
    const match = storeCopy.find((target: any) => target.id === item.id);
    match.inCart++;
    match.stock--;
    setStore(storeCopy);
  }

  function decreaseCartQuantity(item: StoreItem) {
    if (item.inCart < 1) return;
    const storeCopy = structuredClone(store);
    const match = storeCopy.find((target: any) => target.id === item.id);
    match.inCart--;
    match.stock++;
    setStore(storeCopy);
  }

  function getTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.inCart * item.price;
    }
    return total;
  }

  return (
    <div className="App">
      <Header
        store={store}
        getItemImagePath={getItemImagePath}
        increaseCartQuantity={increaseCartQuantity}
      />

      <Main
        cart={cart}
        getItemImagePath={getItemImagePath}
        decreaseCartQuantity={decreaseCartQuantity}
        increaseCartQuantity={increaseCartQuantity}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
0