import filesize from "filesize";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { Disciplines } from "../../models/Discipline";
import { ExamFile } from "../../models/ExamFile";
import { ExamType } from "../../models/ExamType";
import { Professor } from "../../models/Professor";
import InfoProvasService from "../../services/app";
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
  const [username, setUsername] = useState<string>();
  const [tokenId, setTokenId] = useState<string>();
  const [googleId, setGoogleId] = useState<string>();
  const [file, setFile] = useState<ExamFile>();
  const [logged, setLogged] = useState(false);

  const readCookies = () => {
    const cookieUsername = Cookies.get("username");
    const cookieGoogleId = Cookies.get("googleId");
    const cookieTokenId = Cookies.get("tokenId");
    const cookieLogged = Cookies.get("logged");
    if (cookieUsername) {
      setUsername(cookieUsername);
    }
    if (cookieGoogleId) {
      setGoogleId(cookieGoogleId);
    }
    if (cookieTokenId) {
      setTokenId(cookieTokenId);
    }
    if (cookieLogged) {
      if (cookieLogged === "true") setLogged(true);
    }
  };

  useEffect(() => {
    readCookies();
  }, []);

  const sendExam = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const courseId = 1;
    const { postExam } = InfoProvasService;
    const finalSemester = year?.toString() + "." + semester?.toString();
    const examToSend = {
      semester: finalSemester!,
      file: file?.file!,
      google_id: googleId!,
      google_token: tokenId!,
      subject_id: subjectId!,
      professor_id: professorId!,
      exam_type_id: examType!,
    };
    if (examToSend) {
      postExam({ courseId, exam: examToSend });
    }
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

  const acceptFile = (files: File[]) => {
    const uploaded = {
      file: files[0],
      name: files[0].name,
      size: filesize(files[0].size),
    };

    if (logged) {
      setFile(uploaded);
    }
  };

  const loginGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("profileObj" in response) {
      setUsername(response.profileObj.name);
      Cookies.set("username", response.profileObj.name, { expires: 7 });
    } else {
      setUsername("");
    }

    if ("googleId" in response) {
      setGoogleId(response.googleId);
      Cookies.set("googleId", response.googleId, { expires: 7 });
    } else {
      setGoogleId("");
    }

    if ("tokenId" in response) {
      setTokenId(response.tokenId);
      Cookies.set("tokenId", response.tokenId, { expires: 7 });
    } else {
      setTokenId("");
    }

    Cookies.set("logged", "true", { expires: 7 });
    setLogged(!logged);
  };

  const logoutGoogle = () => {
    setUsername("");
    Cookies.remove("username");
    setTokenId("");
    Cookies.remove("googleId");
    setGoogleId("");
    Cookies.remove("tokenId");
    setLogged(!logged);
    Cookies.remove("logged");
  };

  const loginBlock = () => {
    return (
      <div className="columns column is-12 is-centered">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_AUTH_ID || ""}
          buttonText="Login"
          onSuccess={loginGoogle}
          onFailure={() => {}}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  };

  const loggedBlock = () => {
    return (
      <div className="columns column is-12 is-centered">
        <span>
          Você está logado como <strong>{username} </strong>
        </span>
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_AUTH_ID || ""}
          buttonText="Logout"
          onLogoutSuccess={logoutGoogle}
        ></GoogleLogout>
      </div>
    );
  };

  const form = () => {
    return (
      <div>
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
                      <option value="2">Segundo</option>
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

              <fieldset>
                <label className="label">Arquivo PDF</label>
                <Dropzone
                  onDropAccepted={(acceptedFiles) => acceptFile(acceptedFiles)}
                  onDropRejected={() => {
                    alert("arquivo não suportado");
                  }}
                  maxSize={5000000}
                  accept=".pdf"
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div className="drop-container" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          {file
                            ? file.name + "(" + file.size + ")"
                            : "Selecione um arquivo"}
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="columns column is-12 is-centered">
          <ActionButton title="Enviar" onClick={sendExam} />
        </div>
      </div>
    );
  };

  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-offset-2 is-8 panel has-background-white">
          <h1 className=" columns column is-12 is-centered">
            Preencha os campos abaixo com os dados da prova:
          </h1>
          {logged ? loggedBlock() : loginBlock()}
          {logged ? (
            <fieldset>{form()}</fieldset>
          ) : (
            <fieldset disabled>{form()}</fieldset>
          )}
        </div>
      </div>
    </div>
  );
};
