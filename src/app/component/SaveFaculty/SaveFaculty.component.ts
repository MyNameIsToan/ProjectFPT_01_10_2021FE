import { Faculty } from './../../common/Faculty';
import { FacultyServiceService } from './../../service/FacultyService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SaveFaculty',
  templateUrl: './SaveFaculty.component.html',
  styleUrls: ['./SaveFaculty.component.css']
})
export class SaveFacultyComponent implements OnInit {
  ID = '';
  Name = '';
  constructor(private FacultyService : FacultyServiceService) { }

  ngOnInit() {
  }

  SaveFaculty(){
    var faculty = new Faculty();
    faculty.facultyId = this.ID;
    faculty.facultyName = this.Name;
    this.FacultyService.SaveFaculty(faculty).subscribe(data=>{
      console.log("Saving Success");
     window.location.reload();
    });
  }

}
