import React, { useEffect, useState } from "react";
import { Disciplines } from "../../models/Discipline";
import InfoProvasService from "../../services/app";
import { DisciplinesTemplate } from "../templates/Disciplines";

const computerScienceDisciplines: Disciplines[] = [
  {
    id: 1,
    code: "MAB123",
    name: "Cálculo Infinitesimal I",
    semester: 1,
    course_id: 1,
  },
  {
    id: 2,
    code: "MAB123",
    name: "Computação I",
    semester: 1,
    course_id: 1,
  },
  {
    id: 3,
    code: "MAB123",
    name: "Fundamentos da Computação Digital",
    semester: 1,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Sistemas de Informação",
    semester: 1,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Números Inteiros e Criptografia",
    semester: 1,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Cálculo Diferencial e Integral II",
    semester: 2,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Circuitos Lógicos",
    semester: 2,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Computação II",
    semester: 2,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Matemática Combinatória",
    semester: 2,
    course_id: 1,
  },
  {
    id: 1,
    code: "MAB123",
    name: "Organização da Informação",
    semester: 2,
    course_id: 1,
  },
];

export const DisciplinesPage = ({ courseId = 1 }: { courseId?: number }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const listSubjectsOfCourse = async () => {
      const response = await InfoProvasService.listSubjects({ id: courseId });
      setItems(response.data);
    };

    listSubjectsOfCourse();
  }, [courseId]);

  return (
    <DisciplinesTemplate
      disciplines={[...items, ...computerScienceDisciplines]}
    />
  );
};
