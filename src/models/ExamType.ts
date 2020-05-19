import { Resource } from "./Resource";

export interface ExamType extends Resource {
  name: string;
  order: number;
}
