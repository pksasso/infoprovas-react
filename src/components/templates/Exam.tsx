import _ from "lodash";
import React from "react";
import { Exam } from "../../models/Exam";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

export const ExamTemplate = ({ exams }: { exams: Exam[] }) => {
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
        )}° Semestre | ${item.professor.name}`}</div>
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
    <div className="container is-fullhd">
      <div className="columns is-multiline is-centered">{panels}</div>
    </div>
  );
};
