import App from "../webpages/App";
import ShoppingPage from "../webpages/ShoppingPage";
import Checkout from "../webpages/Checkout";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div class="bg-pink-100 p-3">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/shop"}>
          <button>Shop</button>
        </Link>
        <Link to={"/checkout"}>
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
