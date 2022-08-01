
import { StoreItem } from "../../App";
import { ItemList } from "./ItemList";
import { Total } from "./Total";

type Props = {
  cart: StoreItem[];
  getItemImagePath: (item: StoreItem) => string;
  decreaseCartQuantity: (item: StoreItem) => void;
  increaseCartQuantity: (item: StoreItem) => void;
  getTotal:any
};

export function Main({
  cart,
  getItemImagePath,
  decreaseCartQuantity,
  increaseCartQuantity,
  getTotal
}: Props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
       <ItemList
       cart={cart} 
       getItemImagePath={getItemImagePath}
       decreaseCartQuantity={decreaseCartQuantity}
       increaseCartQuantity={increaseCartQuantity}
       getTotal={getTotal}
       />
      
       <Total 
         getTotal={getTotal}
       />
      
    </main>
  );
}