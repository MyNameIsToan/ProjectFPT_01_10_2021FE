import { Subject } from "./Subject";

export class Teacher {
  teacherID!: string;
  teacherName!: string;
  email!: string;
  origin!: string;
  dateofBirth!: Date;
  listofSubject!: Subject[];
  facultyName!: string;
}
