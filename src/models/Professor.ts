import { Resource } from "./Resource";

export interface Professor extends Resource {
  name: string;
  course_id: number;
}
