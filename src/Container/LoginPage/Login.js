import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [component, setComponent] = useState("login");
  const toggle = (component) => {
    setComponent(component);
  };
  return (
    <div className="container">
      <div className="row my-5 mx-auto" style={{maxWidth: "760px"}}>
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
                First time user?{" "}
                <Link
                to="/signup"
                >
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
{
  /* <div className="card mb-3 p-2 mx-auto" style={{ maxWidth: "760px" }}>
{component === "login" ? <>
<div class="card-header text-center mb-1">
  <h5>Login for Sabka Baazar</h5>
</div>
<form>
  <div className="modal-body">
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="inputPassword3" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="inputPassword3"
      />
    </div>
  </div>
  <div className="d-block text-center">
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </>
    <div>
      First time user?{" "}
      <button onClick={() => toggle("signup")} className="btn btn-link">SignUp</button>
    </div>
  </div>
</form>
</>
: component === "signup" ? <Signup toggle={toggle}/>
: null} */
}
