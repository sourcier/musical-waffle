import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Home } from "./pages/Home";
import { BlogList } from "./pages/BlogList";
import { NotFound } from "./pages/NotFound";
import { BlogPost } from "./pages/BlogPost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Masthead />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/blog"} component={BlogList} />
          <Route exact path={"/blog/:slug"} component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
