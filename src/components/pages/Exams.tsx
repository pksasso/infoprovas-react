import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { ExamTemplate } from "../templates/Exam";

export const ExamsPage = ({
  courseId,
  subjectId,
}: {
  courseId: number;
  subjectId: number;
}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getExams = async () => {
      const { fetchExamsBySubject } = InfoProvasService;

      try {
        setIsLoaded(true);
        const response = await fetchExamsBySubject({ courseId, subjectId });
        setItems(response.data);
        setIsLoaded(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    getExams();
  }, [subjectId, courseId]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return <ExamTemplate exams={items} />;
};
