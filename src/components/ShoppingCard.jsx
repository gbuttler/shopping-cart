import ShoppingPage from "../webpages/ShoppingPage";

function ShoppingCard({ Item }) {
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
        Quantity: <input value={0} type="number" />{" "}
      </label>
      <button>Buy</button>
    </>
  );
}

export default ShoppingCard;
