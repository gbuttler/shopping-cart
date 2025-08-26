import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState, useEffect } from "react";

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
