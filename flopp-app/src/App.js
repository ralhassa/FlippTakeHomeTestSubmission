import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return(
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/details/:itemId" exact component={() => <Details />} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
