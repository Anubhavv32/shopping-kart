import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Container/Header";
import Footer from "./Container/footer";
import Homepage from "./Container/Home/Homepage";
import Products from "./Container/Products/Products";
import ProductCart from "./Container/Cart/ProductCart";
import Login from "./Container/LoginPage/Login";
import Signup from "./Container/LoginPage/Signup";
import CartModal from "./Container/Cart/CartModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/cart" exact element={<ProductCart />} />
      </Routes>
            <CartModal />
      <Footer />
    </div>
  );
}

export default App;
