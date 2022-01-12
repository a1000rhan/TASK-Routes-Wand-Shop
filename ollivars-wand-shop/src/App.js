import "./App.css";
import { Home } from "./Components/Home";
import { WandList } from "./Components/WandList";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div className="bg-secondary">
      <h2 className="font-weight-bolder shadow p-5  text-center ">
        Ollivander's Wand Shop
      </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wondlist" element={<WandList />} />
        <Route path="/wondlist/:wandslug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
