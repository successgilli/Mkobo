import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./containers/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
