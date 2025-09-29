import "./App.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import hmpgPic from "../assets/images/hmpgPic.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div class="bg-blue-100">
        <h1>Shop of Stuff</h1>
        <h2>
          Welcome to the shop of stuff! You can find a random assortment of
          items here from clothes to bags to tech. We can't wait to see what you
          buy!
        </h2>
        <p>
          Look no further for stylish clothes, accessories and technology. All
          at reasonable and affordable prices. Shop in style for less!
        </p>
        <img src={hmpgPic}></img>
        <Link to={"/shop"}>
          <button>Click here to shop!</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default App;
