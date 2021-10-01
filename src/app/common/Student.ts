import { Faculty } from './Faculty';
import { Subject } from "./Subject";

export class Student {
  studentID!: string;
  studentName!: string;
  email!: string;
  origin!: string;
  dateofBirth!: Date;
  listNameSubject!: string[];
  listSubject!: string[];
  listIDSubject!: string[];
  facultyName!: string;
  phonenumber!: string;
}
