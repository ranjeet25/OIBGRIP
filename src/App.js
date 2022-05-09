import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Order from "./components/Order";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="" element={<Navbar></Navbar>}>
          {" "}
        </Route> */}
        <Route path="/" element={<Landing></Landing>}>
          {" "}
        </Route>
        <Route exact path="/order" element={<Order></Order>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
