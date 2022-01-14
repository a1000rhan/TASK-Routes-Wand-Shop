import "./App.css";
import { Home } from "./Components/Home";
import { WandList } from "./Components/WandList";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import magic from "./magic.png";

function App() {
  return (
    <div className="backg">
      <h1 className="font-weight-bolder shadow p-5 text-center tracking-in-expand wood-text">
        Ollivander's Wand Shop
      </h1>
      <img className="magic magic1" src={magic} />
      <img className="magic-right magic3" src={magic} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wondlist" element={<WandList />} />
        <Route path="/wondlist/:wandslug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
