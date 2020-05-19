import { ExamType } from "./ExamType";
import { Professor } from "./Professor";
import { Resource } from "./Resource";
import { Subject } from "./Subject";

export interface Exam extends Resource {
  professor_id: number;
  semester: string;
  subject: Subject;
  exam_type: ExamType;
  professor: Professor;
}
