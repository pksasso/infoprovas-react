import { Resource } from "./Resource";

export interface Disciplines extends Resource {
  code: string;
  course_id: number;
  name: string;
  semester: number;
}
