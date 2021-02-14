import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Question from "./Question";
import Result from "./Result";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
      <Route path="/result" component={Result} />
    </Switch>
  );
};

export default Routes;
