import React, { useEffect } from "react";
import Header from "../Home/Header";
function Login() {
  return (
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Login in
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
        </div>
        <div className="modal-footer d-block text-center">
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
            Already have a account?{" "}
            <button className="btn btn-link">SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
