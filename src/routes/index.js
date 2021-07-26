import React from "react";
import { Switch, Route } from "react-router-dom";

import Trade from "../pages/Trade";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Trade} />
    </Switch>
  );
}
