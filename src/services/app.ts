import API from "./API";

const InfoProvasService = {
  listCourses() {
    return API().get("/api/courses");
  },
};

export default InfoProvasService;
