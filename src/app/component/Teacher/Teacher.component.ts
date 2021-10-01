import { TeacherServiceService } from './../../service/TeacherService.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/common/Teacher';

@Component({
  selector: 'app-Teacher',
  templateUrl: './Teacher.component.html',
  styleUrls: ['./Teacher.component.css']
})
export class TeacherComponent implements OnInit {
  Teachers!: Teacher[];
  constructor(private TeacherService : TeacherServiceService) {}

  ngOnInit() {
    this.GetAll();
  }

  GetAll(){
    this.TeacherService.GetALLTeacher().subscribe(data=>{
      this.Teachers = data as Teacher[];
    });
  }

  RemoveTeacher(teacherID : string){
    this.TeacherService.RemoveTeacher(teacherID).subscribe();
    window.location.reload();
  }
}
