import React, { useState } from "react";
import { Disciplines } from "../../models/Discipline";
import { ExamType } from "../../models/ExamType";
import { Professor } from "../../models/Professor";
import { ActionButton } from "../atoms/ActionButton";

export const SendExamTemplate = ({
  subjects,
  professors,
  examTypes,
}: {
  subjects: Disciplines[];
  professors: Professor[];
  examTypes: ExamType[];
}) => {
  const [subjectId, setSubjectId] = useState<number>();
  const [professorId, setProfessorId] = useState<number>();
  const [year, setYear] = useState<number>();
  const [semester, setSemester] = useState<number>();
  const [examType, setExamType] = useState<number>();

  const sendExam = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const finalSemester = year?.toString() + "." + semester?.toString();
    const examToSend = {
      semester: finalSemester,
      file: "arquivo.pdf",
      google_id: "123123",
      google_token: "123123",
      subjectId,
      professorId,
      exam_type_id: examType,
    };
    console.log(examToSend);
  };

  const YearOptions = () => {
    const now = new Date().toLocaleDateString();
    const year = Number(now.split("/")[2]);
    const years = [];
    for (var i = 2000; i < year + 1; i++) {
      years.push(i);
    }
    const yearsOptions = years.map((year) => {
      return (
        <option key={year} value={year.toString()}>
          {year}
        </option>
      );
    });
    return yearsOptions;
  };

  const SubjectsOptions = subjects.map((subject) => {
    return (
      <option key={subject.id} value={subject.id}>
        {subject.name}
      </option>
    );
  });

  const ProfessorsOptions = professors.map((professor) => {
    return (
      <option key={professor.id} value={professor.id}>
        {professor.name}
      </option>
    );
  });

  const ExamTypesOptions = examTypes.map((examType) => {
    return (
      <option key={examType.id} value={examType.id}>
        {examType.name}
      </option>
    );
  });

  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-offset-2 is-8 panel has-background-white">
          <h1 className=" columns column is-12 is-centered">
            Preencha os campos abaixo com os dados da prova:
          </h1>

          <div className="field ">
            <label className="label">Curso</label>
            <div className="field-body">
              <div className="field ">
                <div className="control ">
                  <div className="select is-fullwidth ">
                    <select>
                      <option>Ciências da Computação</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="field-body">
                <div style={{ maxWidth: "50%" }} className="field is-expanded">
                  <label className="label">Disciplina</label>
                  <div className="control ">
                    <div className="select is-fullwidth ">
                      <select
                        onChange={(event) => {
                          setSubjectId(Number(event.target.value));
                        }}
                      >
                        <option>Selecione</option>
                        {SubjectsOptions}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field is-expanded ">
                  <label className="label">Professor</label>
                  <div className="control ">
                    <div className="select is-fullwidth ">
                      <select
                        onChange={(event) => {
                          setProfessorId(Number(event.target.value));
                        }}
                      >
                        <option>Selecione</option>
                        {ProfessorsOptions}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="field-body">
                <div className="field">
                  <label className="label">Ano</label>
                  <div className="control ">
                    <div className="select is-fullwidth ">
                      <select
                        onChange={(event) => {
                          setYear(Number(event.target.value));
                        }}
                      >
                        <option>Selecione</option>
                        {YearOptions()}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Semestre</label>
                  <div className="control ">
                    <div className="select is-fullwidth ">
                      <select
                        onChange={(event) => {
                          setSemester(Number(event.target.value));
                        }}
                      >
                        <option>Selecione</option>
                        <option value="1">Primeiro</option>
                        <option value="1">Segundo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="field-body">
                <div style={{ maxWidth: "50%" }} className="field">
                  <label className="label">Tipo</label>
                  <div className="control ">
                    <div className="select is-fullwidth ">
                      <select
                        onChange={(event) => {
                          setExamType(Number(event.target.value));
                        }}
                      >
                        <option>Selecione</option>
                        {ExamTypesOptions}
                      </select>
                    </div>
                  </div>
                </div>
                <fieldset disabled>
                  <div className="field is-fullwidth">
                    <label className="label">Arquivo PDF</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Procurar"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="columns column is-12 is-centered">
            <ActionButton title="Enviar" onClick={sendExam} />
          </div>
        </div>
      </div>
    </div>
  );
};