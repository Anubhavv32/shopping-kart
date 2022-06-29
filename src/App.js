import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Container/Home/Homepage";
import Products from "./Container/Products/Products";
import Login from "./Container/LoginPage/Login";
import ProductCart from "./Container/Cart/ProductCart";
import Header from "./Container/Header";
import Footer from "./Container/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/cart" exact element={<ProductCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
