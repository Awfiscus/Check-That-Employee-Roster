import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Router>
  );
}

export default App;
