import _ from "lodash";
import React from "react";
import { Exam } from "../../models/Exam";
import { Professor } from "../../models/Professor";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

export const ProfessorExamsTemplate = ({
  exams,
  professor,
}: {
  exams: Exam[];
  professor: Professor | undefined;
}) => {
  const panels: JSX.Element[] = [];

  const examsPerType = _.groupBy(exams, "exam_type.order");

  const formatYearAndPeriod = (text: string) => {
    const year = text.split(".")[0];
    const semester = text.split(".")[1];
    return `${year} - ${semester}`;
  };

  _.forEach(examsPerType, (value, key) => {
    const orderedByYear = _.sortBy(value, ["semester"], ["asc"]);
    const links = orderedByYear.map((item) => {
      return (
        <div key={item.id}>{`${formatYearAndPeriod(
          item.semester
        )}° Semestre | ${item.subject.name}`}</div>
      );
    });

    panels.push(
      <div className="column is-7" key={key}>
        <Panel
          title={`${value[0].exam_type.name}`}
          content={<List data={links} />}
        />
      </div>
    );
  });

  return (
    <div className="container is-fluid">
      <h1 className="title columns column is-12 is-centered">
        {professor?.name}
      </h1>
      <div className="columns is-multiline is-centered">
        {panels.length > 0 ? panels : "Nenhuma prova enviada"}
      </div>
    </div>
  );
};
