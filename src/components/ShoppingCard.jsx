import ShoppingPage from "../webpages/ShoppingPage";
import { useState } from "react";

function ShoppingCard({ Item, onBuy }) {
  const [quantity, setQuantity] = useState(0);

  function increaseAmount() {
    setQuantity(quantity + 1);
    console.log(`buy ${quantity + 1} of ${Item.title}`);
  }

  function handleQuantityChange(e) {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setQuantity(value);
    }
  }

  function handleAddToBasket() {
    if (quantity > 0) {
      onBuy(Item, quantity);
      setQuantity(0);
    }
  }

  return (
    <>
      <ul>
        <li>
          <img src={Item.image} />
        </li>
        <li>{Item.title}</li>
        <li>{Item.description}</li>
        <li>{Item.price}</li>
      </ul>
      <label>
        Quantity:{" "}
        <input value={quantity} onChange={handleQuantityChange} type="number" />{" "}
      </label>
      <button onClick={increaseAmount}>+1</button>
      <button onClick={handleAddToBasket}>Add to Basket</button>
    </>
  );
}

export default ShoppingCard;
