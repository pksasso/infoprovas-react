import { Resource } from "./Resource";

export interface Subject extends Resource {
  code: string;
  name: string;
  semester: number;
  course_id: number;
}
