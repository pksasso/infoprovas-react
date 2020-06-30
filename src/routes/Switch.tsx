import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ButtonGroup } from "../components/molecules/ButtonGroup";
import { Contact } from "../components/pages/Contact";
import { ExamsPage as Exams } from "../components/pages/Exams";
import { HelpPage as Help } from "../components/pages/Help";
import { Pdf } from "../components/pages/Pdf";
import { ProfessorExamsPage as ProfessorExams } from "../components/pages/ProfessorExams";
import { ProfessorsPage as Professors } from "../components/pages/Professors";
import { SemestersPage as Semesters } from "../components/pages/Semesters";
import { SendExamPage as SendExam } from "../components/pages/SendExam";
import { MatchProps as Match } from "../models/MatchParams";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/semestre" />
      </Route>
      <Route path="/semestre">
        <>
          <ButtonGroup />
          <Semesters />
        </>
      </Route>
      <Route exact path="/professores">
        <>
          <ButtonGroup />
          <Professors />
        </>
      </Route>
      <Route
        path={"/professor/:id"}
        render={({ match }: Match) => {
          return (
            <>
              <ProfessorExams
                courseId={1}
                professorId={parseInt(match.params.id)}
              />
            </>
          );
        }}
      />
      <Route
        path={"/materia/:id"}
        render={({ match }: Match) => {
          return (
            <>
              <Exams courseId={1} subjectId={parseInt(match.params.id)} />
            </>
          );
        }}
      />
      <Route path="/provas">
        <SendExam />
      </Route>
      <Route path="/ajuda">
        <Help />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="/teste">
        <Pdf />
      </Route>
    </Switch>
  );
};
