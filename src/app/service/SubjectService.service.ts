import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  url = 'http://localhost:8081/Subject';
  constructor(private HttpClient : HttpClient) {

  }

  GetALL(){
    return this.HttpClient.get(this.url);
  }

  RemoveSubject(id : string){
    return this.HttpClient.delete(this.url+'/'+id);
  }

}
