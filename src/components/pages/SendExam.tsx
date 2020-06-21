import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { SendExamTemplate } from "../templates/SendExam";

export const SendExamPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [courseId] = useState(1);
  const [examTypes, setExamTypes] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const getProfessors = async () => {
      const { fetchProfessorsByCourse } = InfoProvasService;
      try {
        setIsLoaded(true);
        const response = await fetchProfessorsByCourse({ courseId });
        setProfessors(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    const getSubjects = async () => {
      const { fetchSubjects } = InfoProvasService;
      try {
        setIsLoaded(true);
        const response = await fetchSubjects({ courseId });
        setSubjects(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    const getExamTypes = async () => {
      const { fetchExamTypes } = InfoProvasService;
      try {
        setIsLoaded(true);
        const response = await fetchExamTypes();
        setExamTypes(response.data);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
      }
    };

    getSubjects();
    getProfessors();
    getExamTypes();
  }, [courseId]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <SendExamTemplate
      subjects={subjects}
      professors={professors}
      examTypes={examTypes}
    />
  );
};
