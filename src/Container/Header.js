import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./header.css";
import Cart from "../images/cart.svg";
import CartModal from "./Cart/CartModal";

export const Header = ({ cartList }) => {
  console.log(cartList);
  let content = 0;
  for (let product in cartList) {
    content = content + cartList[product];
  }
  let screenWidth = window.innerWidth;
  const { pathname } = window.location;
  console.log(pathname);
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper container px-0">
        <Link to="/">
          <img src={logo} alt="brand" className="logo" />
        </Link>

        {screenWidth > 500 ? (
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </nav>
        ) : null}
        {pathname !== "/login" && pathname !== "/signup" ? (
          <div>
            <nav className="d-flex mb-2">
              <Link to="/login">Login</Link>
              <Link to="/login">Register</Link>
            </nav>
            <div
              className="px-2 pt-1"
              style={{ background: "#ebebeb", float: "right" }}
            >
              {screenWidth > 960 ? (
                <button className="btn btn-transparent p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={Cart} alt="cart" width={50} height={50} />
                </button>
              ) : (
                <Link to="/cart" aria-label="cart">
                  {" "}
                  <img src={Cart} alt="cart" width={50} height={50} />
                  {/* <IconButton aria-label="cart">
                <StyledBadge badgeContent={content} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton> */}
                </Link>
              )}

              {content} items
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
