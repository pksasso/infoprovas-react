import React from "react";
import { Route, Switch } from "react-router-dom";
import { Contact } from "../components/pages/Contact";
import { ExamsPage as Exams } from "../components/pages/Exams";
import { SemestersPage as Semesters } from "../components/pages/Semesters";
import { TemplatePage } from "../components/templates/Template";
import { MatchProps as Match } from "../models/MatchParams";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Semesters />
      </Route>
      <Route
        path={"/materia/:id"}
        render={({ match }: Match) => {
          return <Exams courseId={1} subjectId={parseInt(match.params.id)} />;
        }}
      />
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
