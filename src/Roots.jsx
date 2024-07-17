import React from "react";
import { Route, Switch } from "wouter";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function Roots() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Roots;