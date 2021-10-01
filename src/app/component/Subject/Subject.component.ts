import { SubjectServiceService } from './../../service/SubjectService.service';
import { Subject } from './../../common/Subject';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Subject',
  templateUrl: './Subject.component.html',
  styleUrls: ['./Subject.component.css']
})
export class SubjectComponent implements OnInit {
  Subjects!: Subject[];
  url = 'http://localhost:8081/Subject'
  constructor(private SubjectService : SubjectServiceService) { }

  ngOnInit() {
    this.SubjectService.GetALL().subscribe(data=>{
      this.Subjects = data as Subject[];
    });
  }

  RemoveSubject(id : string){
    this.SubjectService.RemoveSubject(id).subscribe();
    window.location.reload();
  }
}
