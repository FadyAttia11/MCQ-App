import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Question from "./Question";
import Result from "./Result";
import Restarting from "./Restarting";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
      <Route path="/result" component={Result} />
      <Route path="/restarting" component={Restarting} />
    </Switch>
  );
};

export default Routes;
