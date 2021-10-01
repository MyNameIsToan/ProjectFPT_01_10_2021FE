import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/Student';
import { StudentServiceService } from 'src/app/service/StudentService.service';

@Component({
  selector: 'app-SaveStudentReact',
  templateUrl: './SaveStudentReact.component.html',
  styleUrls: ['./SaveStudentReact.component.css']
})
export class SaveStudentReactComponent implements OnInit {
  Quantity = '';
  BirthDateToSend = '';
  ListSubject!: string[];
  StudentForm : FormGroup
  constructor(private StudentService : StudentServiceService) {
    this.ListSubject = [];
    this.StudentForm = new FormGroup({
      'ID': new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/[0-9]/)]),
      'Name' : new FormControl(null, Validators.required),
      'Phone': new FormControl(null, [Validators.required,Validators.pattern(/[0-9]/)]),
      'Email': new FormControl(null,[Validators.required, Validators.email]),
      'Birthdate': new FormControl(null, Validators.required),
      'Origin': new FormControl(null, Validators.required),
      'Faculty': new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  OnSubmit(){
    if(this.StudentForm.invalid){
      console.log('invalid');
      return;
    }
    this.SaveStudent();
  }

  counter() {
    return new Array(Number(this.Quantity));
  }

  SaveStudent(){
    var student = new Student();
    student.studentID = this.StudentForm.controls['ID'].value;
    student.studentName = this.StudentForm.controls['Name'].value;
    student.email = this.StudentForm.controls['Email'].value;
    student.origin = this.StudentForm.controls['Origin'].value;
    student.facultyName = this.StudentForm.controls['Faculty'].value;
    student.phonenumber = this.StudentForm.controls['Phone'].value;
    student.dateofBirth = this.StudentForm.controls['Birthdate'].value;
    student.listIDSubject = this.ListSubject;
    this.StudentService.SaveStudent(student).subscribe(data=>{
      console.log("Saving Success");
     window.location.reload();
    });
  }
}
