import { StudentServiceService } from './../../service/StudentService.service';
import { Student } from 'src/app/common/Student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SaveStudent',
  templateUrl: './SaveStudent.component.html',
  styleUrls: ['./SaveStudent.component.css']
})
export class SaveStudentComponent implements OnInit {
  ID = '';
  Name = '';
  Email = '';
  Origin = '';
  Faculty = '';
  Quantity = '';
  Birthdate = '';
  PhoneNum = '';
  ListSubject!: string[];

  constructor(private StudentService : StudentServiceService) {
    this.ListSubject = [];
  }
  ngOnInit() {
  }

  SaveStudent(){
    var student = new Student();
    student.studentID = this.ID;
    student.studentName = this.Name;
    student.email = this.Email;
    student.origin = this.Origin;
    student.facultyName = this.Faculty;
    student.listIDSubject = this.ListSubject;
    this.StudentService.SaveStudent(student).subscribe(data=>{
      console.log("Saving Success");
     window.location.reload();
    });
  }
  counter() {
    return new Array(Number(this.Quantity));
  }
}
