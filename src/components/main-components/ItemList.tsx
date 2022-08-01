import {StoreItem} from '../../App'

type Props={
    cart: StoreItem[];
    getItemImagePath: (item: StoreItem) => string;
    decreaseCartQuantity: (item: StoreItem) => void;
    increaseCartQuantity: (item: StoreItem) => void;
    getTotal:any
}



export function ItemList({cart, getItemImagePath,decreaseCartQuantity,increaseCartQuantity}:Props){
    return(
        <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map((item) => (
            <li>
              <img
                className="cart--item-icon"
                src={getItemImagePath(item)}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={function () {
                  decreaseCartQuantity(item);
                }}
              >
                -
              </button>
              <span className="quantity-text center">{item.inCart}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={function () {
                  increaseCartQuantity(item);
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}