import React from "react";
import "./App.css";
import VendingMachine from "./VendingMachine";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import FreshSardines from "./FreshSardines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/freshSardines" element={<FreshSardines />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
