import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Signup({ toggle }) {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h5>Login</h5>
          <p>Get access of your orders, wishlist and recommendations.</p>
        </div>
        <div className="col">
          <div className="card ">
            <form className="card-form">
              <div className="input">
                <input type="text" className="input-field" required />
                <label className="input-label">Email</label>
              </div>
              <div className="input">
                <input type="password" className="input-field" required />
                <label className="input-label">Password</label>
              </div>
              <div className="action">
                <button className="action-button">Submit</button>
              </div>
              <div className="switch-btn">
                Already have a account?{" "} <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
