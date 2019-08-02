import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import './Signin.styles.scss';
class SigninPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              handleChange={this.handleChange}
              name="email"
              value={this.state.email}
              label="Email"
              required
            />
            <FormInput
              type="password"
              handleChange={this.handleChange}
              name="password"
              label="Password"
              value={this.state.password}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SigninPage;
