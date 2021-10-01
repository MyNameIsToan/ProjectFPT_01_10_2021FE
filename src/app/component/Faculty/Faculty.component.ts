import { FacultyServiceService } from './../../service/FacultyService.service';
import { Faculty } from './../../common/Faculty';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Faculty',
  templateUrl: './Faculty.component.html',
  styleUrls: ['./Faculty.component.css']
})
export class FacultyComponent implements OnInit {
  Faculties!: Faculty[];
  IsShowSave = true;
  constructor(private FacultyService: FacultyServiceService) { }

  ngOnInit() {
    this.FacultyService.GetAll().subscribe(data=>{
      this.Faculties = data as Faculty[];
    });
  }

  ShowSave(){
    this.IsShowSave = !this.IsShowSave;
  }

  RemoveFaculty(facultyID : string){
    this.FacultyService.RemoveFaculty(facultyID).subscribe();
    window.location.reload();
  }
}
