import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../common/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
url = 'http://localhost:8081/Student';
constructor(private HttpClient: HttpClient) { }

GetAll(){
  return this.HttpClient.get(this.url);
}
SaveStudent(student : Student){
  return this.HttpClient.post(this.url, student);
}
RemoveStudent(id : string){
  return this.HttpClient.delete(this.url+'/'+id);
}

}
