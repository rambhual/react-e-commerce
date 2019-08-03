import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ContactPage from "./pages/contact/contact.component";
import Header from "./components/header/header.component";
import Signin from "./pages/signin_signup/signin_signup.component";
import { auth } from "./firebase/firebase-utils";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
