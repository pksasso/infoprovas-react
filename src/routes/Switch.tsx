import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { Contact } from "../components/pages/Contact";
import { ExamsPage as Exams } from "../components/pages/Exams";
import { SemestersPage as Semesters } from "../components/pages/Semesters";
import { TemplatePage } from "../components/templates/Template";

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Semesters />
      </Route>
      <Route
        path="/:id"
        render={({ match }: MatchProps) => (
          <Exams courseId={1} subjectId={parseInt(match.params.id)} />
        )}
      ></Route>
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
