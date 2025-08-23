import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function Card({ Item }) {
  return (
    <>
      <li>
        <img src={Item.image} />
      </li>
      <li>{Item.title}</li>
      <li>{Item.description}</li>
      <li>{Item.price}</li>
    </>
  );
}

function ShoppingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const productItems = products.map((product) => (
    <Card key={product.id} Item={product} />
  ));

  return (
    <>
      <Navbar />
      <div class="bg-green-100">
        <h1>Shop</h1>
        <p>Products</p>
        <ul>{productItems.length !== 0 ? productItems : <p>Loading...</p>}</ul>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingPage;
