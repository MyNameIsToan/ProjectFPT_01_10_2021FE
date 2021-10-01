import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Faculty {
  facultyId!: string;
  facultyName!: string;
  ListStudent!: Student[];
  ListTeacher!: Teacher[];
}
