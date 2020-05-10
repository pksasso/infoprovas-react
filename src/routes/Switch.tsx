import React from "react";
import { Switch, Route } from "react-router-dom";
import { TemplatePage } from "../components/templates/Template";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TemplatePage title="Início" />
      </Route>
      <Route path="/provas">
        <TemplatePage title="Enviar Prova" />
      </Route>
      <Route path="/ajuda">
        <TemplatePage title="Ajuda" />
      </Route>
      <Route path="/contato">
        <TemplatePage title="Contato" />
      </Route>
    </Switch>
  );
};
