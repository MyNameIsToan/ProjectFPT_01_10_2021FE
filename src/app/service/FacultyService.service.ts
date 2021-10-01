import { Faculty } from './../common/Faculty';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  url = 'http://localhost:8081/Faculty';
  constructor(private HttpClient: HttpClient) { }

  GetAll(){
    return this.HttpClient.get(this.url);
  }
  SaveFaculty(faculty : Faculty){
    return this.HttpClient.post(this.url, faculty);
  }
  RemoveFaculty(id : string){
    return this.HttpClient.delete(this.url+'/'+id);
  }
}
