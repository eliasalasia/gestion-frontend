import React from "react";
import { Router, Route, Switch } from "wouter";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ManageIncidence from "./pages/ManageIncidence";
import CreateIncidence from "./pages/CreateIncidence";
import ViewIncidence from "./components/dashboard/ViewIncidence";
import UpdateIncidence from "./pages/UpdateIncidence";

const userNombre = 'Ramses'; // Ejemplo de nombre de usuario, puedes reemplazarlo con datos reales
const userType = 'admin'; // Ejemplo de tipo de usuario

function Roots() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={() => <Dashboard userNombre={userNombre} userType={userType} />} />
        <Route path="/crear-incidencia" component={() => <CreateIncidence userNombre={userNombre}/>} />
        <Route path="/gestion-incidencias" component={ () => <ManageIncidence userNombre={userNombre} isAdmin={true}/>} />
        <Route path="/ver-incidencias" component={ViewIncidence} />
        <Route path="/actualizar-incidencia/:id" component={UpdateIncidence} />
      </Switch>
    </Router>
  );
}

export default Roots;
