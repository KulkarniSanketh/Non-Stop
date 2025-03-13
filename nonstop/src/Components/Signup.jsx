import React from "react";
import google from "../images/google.png";
import arrow from "../images/arrow.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup">
      <form action="">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text-center">Signup</h1>
        <label htmlFor="formId1">Name</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="container"
            name="formId1"
            id="formId1"
            placeholder=""
          />
        </div>

        <label htmlFor="formId2">Mobile</label>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="container"
            name="formId2"
            id="formId2"
            placeholder=""
          />
        </div>

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

        <a href="" className="googlelogo">
          <b>Sign up with Google </b>
          <img src={google} alt="google" className="googlelogo p-1" />
        </a>
        <br />

        <Link to="/forgot-password" className="googlelogo">
          <h6>
            Forgot Password
            <img src={arrow} alt="arrow" className="googlelogo p-1" />
          </h6>
        </Link>

        <Link to="/">Already have an account? Sign-in</Link>
      </form>
    </div>
  );
}

export default Signup;