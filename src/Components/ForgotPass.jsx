import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function ForgotPass() {
  return (
    <div className="Signup">
      <form action="">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text-center">Reset Pass</h1>
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
        <br />
        <button type="submit" className="btn btn-dark container">
          Submit
        </button>
        <br />
        <br />
        <Link to="/signup">Don't have an account? Create One</Link>
      </form>
    </div>
  );
}

export default ForgotPass;