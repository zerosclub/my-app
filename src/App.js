import './App.css';
import Pg1 from "./Temp/Page1";
import Pg2 from "./Temp/Page2";
import { Routes, Route, Link } from "react-router-dom";

function Appp() {
  return (
    <div className="App">
      <nav>
        <Link to="Pg1">Page1</Link> | <Link to="Pg2">Page2</Link>
      </nav>
      <Routes>
        <Route path="pg1" element={<Pg1 />} />
        <Route path="pg2" element={<Pg2 />} />
      </Routes>
    </div>
  );
}

export default Appp;
