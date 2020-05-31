import { Resource } from "./Resource";

export interface Professor extends Resource {
  id: number;
  name: string;
  course_id: number;
}
