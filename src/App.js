import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogListPage } from "./pages/BlogListPage";
import { Masthead } from "./components/Masthead";
import { NotFoundPage } from "./pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Masthead />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/blog"} component={BlogListPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
