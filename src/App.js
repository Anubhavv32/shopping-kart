import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Container/Home/Homepage";
import Products from "./Container/Products/Products";
import Login from "./Container/LoginPage/Login";
function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
