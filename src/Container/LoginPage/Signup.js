import React from 'react'

function Signup({toggle}) {
  return (
    <>
        <div class="card-header text-center mb-1">
          <h5>Sign up for Sabka Baazar</h5>
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Contact No.
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                minLength={10}
                maxLength={10}
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
              Already have a Account?{" "}
              <button onClick={() => toggle("signup")} className="btn btn-link">Login</button>
            </div>
          </div>
        </form>
        </>
  )
}

export default Signup;