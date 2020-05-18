import React from "react";
import { Route, Switch } from "react-router-dom";
import { Contact } from "../components/pages/Contact";
import { DisciplinesPage } from "../components/pages/Disciplines";
import { TemplatePage } from "../components/templates/Template";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DisciplinesPage title="Início" />
      </Route>
      <Route path="/provas">
        <TemplatePage title="Enviar Prova" />
      </Route>
      <Route path="/ajuda">
        <TemplatePage title="Ajuda" />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
    </Switch>
  );
};
