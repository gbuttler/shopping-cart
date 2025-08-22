import "./App.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <div class="bg-blue-100">
        <h1>Shop Name</h1>
        <h2>Shop tagline</h2>
        <p>Description of shop</p>
        <Link to={"/shop"}>
          <button>Click here to shop!</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default App;
