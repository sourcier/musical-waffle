import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Home } from "./pages/Home";
import { BlogList } from "./pages/BlogList";
import { NotFound } from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Masthead />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/blog"} component={BlogList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
