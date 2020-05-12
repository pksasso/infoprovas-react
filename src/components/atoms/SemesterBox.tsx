import React from "react";
import { Link } from "react-router-dom";
import { Subject } from "./Subject";

export const SemesterBox = ({
  semester,
  subjects,
}: {
  semester: number;
  subjects: Subject[];
}) => {
  return (
    <div className="period-box">
      <p className="semester-title">{`${semester}° Periodo`}</p>
      <div className="subject-list">
        {subjects.map((subject) => (
          <Link className="subject-item" to={`${subject.id}/${subject.name}`}>
            {subject.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
