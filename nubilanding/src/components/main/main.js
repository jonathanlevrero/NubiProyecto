import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import Empresas from "../empresas/empresas";
import Nosotros from "../nosotros/nosotros";
import Prensa from "../prensa/prensa";
import TerminosCondiciones from "../terminosCondiciones/terminosCondiciones";
import Privacidad from "../privacidad/privacidad";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/empresas" component={Empresas} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route path="/prensa" component={Prensa} />
        <Route path="/terminos-condiciones" component={TerminosCondiciones} />
        <Route path="/privacidad" component={Privacidad} />
      </Switch>
    </main>
  );
}

export default Main;
