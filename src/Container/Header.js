import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export const Header = ({ cartList }) => {
  console.log(cartList);
  let content = 0;
  for (let product in cartList) {
    content = content + cartList[product];
  }
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper container px-0">
        <Link to="/">
          <img src={logo} alt="brand" />
        </Link>

        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div>
          <nav className="d-flex mb-2">
            <Link to="/login">
              Login
            </Link>
            <Link to="/login">
              Register
            </Link>
          </nav>
          <div className="px-3 pt-1" style={{background: "#ebebeb", float: "right"}}>
            <Link to="/cart">
              {" "}
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={content} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
