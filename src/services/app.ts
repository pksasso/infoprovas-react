import infoProvasAPI from "./API";

const InfoProvasService = {
  fetchSubjects({ courseId }: { courseId: number }) {
    return infoProvasAPI.get(`/api/courses/${courseId}/subjects`);
  },
  fetchCourses() {
    return infoProvasAPI.get("api/courses");
  },
  fetchExamTypes() {
    return infoProvasAPI.get("api/exam_types");
  },
  fetchExamsBySubject({
    courseId,
    subjectId,
  }: {
    courseId: number;
    subjectId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/subjects/${subjectId}/exams`
    );
  },
  fetchExamFile({
    courseId,
    subjectId,
    examId,
  }: {
    courseId: number;
    subjectId: number;
    examId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/subjects/${subjectId}/exams/${examId}/file`
    );
  },
  fetchExamsByProfessor({
    courseId,
    professorId,
  }: {
    courseId: number;
    professorId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/professors/${professorId}/exams`
    );
  },
  getExamByProfessor({
    courseId,
    professorId,
    examId,
  }: {
    courseId: number;
    professorId: number;
    examId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/professors/${professorId}/exams/${examId}`
    );
  },
  getExamFileByProfessor({
    courseId,
    professorId,
    examId,
  }: {
    courseId: number;
    professorId: number;
    examId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/professors/${professorId}/exams/${examId}/file`
    );
  },
  fetchProfessorsByCourse({ courseId }: { courseId: number }) {
    return infoProvasAPI.get(`api/courses/${courseId}/professors`);
  },
};

export default InfoProvasService;
