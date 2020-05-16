import API from "./API";

export const InfoProvasService = {
  listCourses() {
    return API().get("/api/courses");
  },
};
