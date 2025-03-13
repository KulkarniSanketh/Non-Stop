import React from "react";
import arrow from "../images/arrow.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Signup">
      <form action="">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text-center">Log-in</h1>
        <label htmlFor="formId3">Email</label>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="container"
            name="formId3"
            id="formId3"
            placeholder=""
          />
        </div>
        <label htmlFor="formId4">Password</label>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="container"
            name="formId4"
            id="formId4"
            placeholder=""
          />
        </div>
        <br />
        <button type="submit" className="btn btn-dark container">
          Submit
        </button>
        <br />
        <br />
        <br />

        <Link to="/forgot-password" className="googlelogo">
          <h6>
            Forgot Password
            <img src={arrow} alt="arrow" className="googlelogo p-1" />
          </h6>
        </Link>

        <Link to="/signup">Don't have an account? Create One</Link>
      </form>
    </div>
  );
}

export default Login;