import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <Navbar />
      <div class="bg-red-100">
        <h1>Checkout</h1>
        <p>This is the list of items you want to buy</p>
        <p>Total to pay: £00000</p>
        <button>Pay here</button>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
