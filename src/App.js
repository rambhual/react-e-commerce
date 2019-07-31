import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatPage = () => {
  return (
    <div>
      <h2>This is hat page!</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
