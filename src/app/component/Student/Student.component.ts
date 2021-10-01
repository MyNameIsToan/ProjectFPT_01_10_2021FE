import { StudentServiceService } from './../../service/StudentService.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/Student';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent implements OnInit {
  students!: Student[];
  IsShowSave = true;
  constructor(private StudentService:StudentServiceService) { }

  ngOnInit() {
    this.GetAll();
  }

  ShowSave(){
    this.IsShowSave = !this.IsShowSave;
  }

  GetAll(){
    this.StudentService.GetAll().subscribe(data=>{
      this.students = data as Student[];
    });
  }

  RemoveStudent(studentID : string){
    this.StudentService.RemoveStudent(studentID).subscribe();
    window.location.reload();
  }
}
