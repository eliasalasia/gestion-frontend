import React from "react";
import { Router, Route, Switch } from "wouter";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ManageIncidence from "./pages/ManageIncidence";
import CreateIncidence from "./pages/CreateIncidence";
import ViewIncidence from "./components/dashboard/ViewIncidence";
import UpdateIncidence from "./pages/UpdateIncidence";
import UpdateIncUser from "./pages/UpdateIncUser";
import { useUser } from './services/UserContext';

function Roots() {
  const { userNombre, userType, userId } = useUser();


  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={() => <Dashboard userNombre={userNombre} userType={userType} />} />
        <Route path="/crear-incidencia" component={() => <CreateIncidence userNombre={userNombre} />} />
        <Route path="/gestion-incidencias" component={() => <ManageIncidence userNombre={userNombre} isAdmin={true} />} />
        <Route path="/ver-incidencias" component={() => <ViewIncidence userType={userType} userId={userId} />} />
        <Route path="/actualizar-incidencia/:id" component={UpdateIncidence} />
        <Route path="/actualizar-datos/:id" component={UpdateIncUser} />
      </Switch>
    </Router>
  );
}

export default Roots;
