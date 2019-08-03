import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <React.Fragment>
        <div className="sign-up">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              value={displayName}
              name="displayName"
              type="text"
              handleChange={this.handleChange}
              label="Display name"
            />
            <FormInput
              value={email}
              handleChange={this.handleChange}
              name="email"
              type="email"
              label="email"
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit">Sign up</CustomButton>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
