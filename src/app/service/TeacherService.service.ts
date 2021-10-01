import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
url = 'http://localhost:8081/Teacher';
constructor(private HttpClient : HttpClient) {

}

GetALLTeacher(){
  return this.HttpClient.get(this.url);
}

RemoveTeacher(id : string){
  return this.HttpClient.delete(this.url+'/'+id);
}

}
