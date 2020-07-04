import { ExamToSend } from "../models/ExamToSend";
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
  getProfessorDetailsByCourse({
    courseId,
    professorId,
  }: {
    courseId: number;
    professorId: number;
  }) {
    return infoProvasAPI.get(
      `api/courses/${courseId}/professors/${professorId}`
    );
  },
  async postContact({
    name,
    email,
    subject,
    message,
    captcha,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
    captcha: string;
  }) {
    const messagePack = {
      name,
      email,
      subject,
      message,
      "g-recaptcha-response": captcha,
    };
    try {
      return await infoProvasAPI.post(`api/contact`, messagePack);
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
  postExam({ courseId, exam }: { courseId: number; exam: ExamToSend }) {
    const sendData = new FormData();
    sendData.append("file", exam.file);
    sendData.append("semester", exam.semester);
    sendData.append("exam_type_id", String(exam.exam_type_id));
    sendData.append("google_id", exam.google_id);
    sendData.append("google_token", exam.google_token);
    sendData.append("professor_id", String(exam.professor_id));
    sendData.append("subject_id", String(exam.subject_id));

    infoProvasAPI
      .post(`api/courses/${courseId}/new_exam`, sendData)
      .then((res) => {});
  },
};

export default InfoProvasService;
