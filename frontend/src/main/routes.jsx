import React from "react";
import { Router, Route, Redirect, IndexRoute, hashHistory } from "react-router";
import App from "./app";
import BillingCycles from "../billingCycle/billingCycle";
import Dashboard from "../dashBoard/dashBoard";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/billingCycles" component={BillingCycles} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
