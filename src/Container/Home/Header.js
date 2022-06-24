import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "../LoginPage/Modal";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export const Header = (props) => {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <Link to="/">
          <img src={logo} alt="brand" />
        </Link>
        <nav className="nav">
          <Link to="/products">Products</Link>
          <button
            type="button"
            class="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Login
          </button>
          <Link to="/cart">
            {" "}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
