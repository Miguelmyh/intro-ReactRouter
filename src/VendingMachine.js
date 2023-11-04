import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <NavBar />
      <img src="https://img.freepik.com/premium-vector/vending-machine-cartoon-snack-drinks-selling_53562-15428.jpg" />
    </div>
  );
};

export default VendingMachine;
