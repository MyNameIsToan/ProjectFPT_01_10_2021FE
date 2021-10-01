import { Teacher } from './Teacher';
import { Student } from 'src/app/common/Student';
export class Subject {
  subjectID!: string;
  subjectName!: string;
  ListStudent!: Student[];
  ListTeacher!: Teacher[];
}
