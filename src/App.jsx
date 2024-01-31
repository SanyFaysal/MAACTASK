import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Banner from "./components/home_components/Banner";
import banner from "../src/assets/banner.png";
import ProductFeatures from "./components/home_components/ProductFeatures";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ background: `url(${banner})` }}>
        <Navbar />
        <Banner />
      </div>
      <ProductFeatures />
    </div>
  );
}

export default App;
