import About from "./components/About";
import Home from "./components/Home";
import Lodging from "./components/Lodging";
import Navbar from "./components/Navbar";
import Regions from "./components/Regions";
import Resorts from "./components/Resorts";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Regions />
      <Lodging />
      <Resorts />
      <About />
    </div>
  );
}

export default App;
