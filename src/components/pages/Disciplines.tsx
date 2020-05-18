import React, { useEffect, useState } from "react";
import InfoProvasService from "../../services/app";
import { DisciplinesTemplate } from "../templates/Disciplines";

export const DisciplinesPage = ({ courseId = 1 }: { courseId?: number }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      const { fetchSubjects } = InfoProvasService;
      const response = await fetchSubjects({ courseId });
      setItems(response.data);
    };

    getSubjects();
  }, [courseId]);

  return <DisciplinesTemplate disciplines={items} />;
};
