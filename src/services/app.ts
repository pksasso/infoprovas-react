import API from "./API";

const InfoProvasService = {
  listSubjects({ id }: { id: number }) {
    return API().get(`/api/courses/${id}/subjects`);
  },
};

export default InfoProvasService;
