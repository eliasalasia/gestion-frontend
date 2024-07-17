import React from "react";
import { Route, Switch } from "wouter";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import GestinIndence from "./pages/dashboard/GestinIndence";
import CreateIncidence from "./pages/dashboard/CreateIncidence";
import ListIncidence from "./pages/dashboard/ListIncidence";

function Roots() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/gestion-incidencias">
        <GestinIndence />
      </Route>
      <Route path="/crear-incidencia">
        <CreateIncidence />
      </Route>
      <Route path="/incidencias">
        <ListIncidence />
      </Route>

    </Switch>
  );
}

export default Roots;