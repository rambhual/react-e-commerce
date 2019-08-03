import React from "react";
import SigninPage from "../../components/sign-in/Signin.componenet";
import SignupForm from "../../components/sign-up/sign-up.component";
import "./signin_signup.styles.scss";

const Signin = () => (
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <SigninPage />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <SignupForm />
        </div>
      </div>
    </div>
  </div>
);

export default Signin;
