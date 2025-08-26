import ShoppingPage from "../webpages/ShoppingPage";

function Card({ Item }) {
  return (
    <>
      <li>
        <img src={Item.image} />
      </li>
      <li>{Item.title}</li>
      <li>{Item.description}</li>
      <li>{Item.price}</li>
      <label>
        Quantity: <input value={0} type="number" />{" "}
      </label>
      <button>Buy</button>
    </>
  );
}

export default Card;
