import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  baseUrl = "http://localhost:3000/users";

  constructor(public httpClient: HttpClient) { }

  testAjaxCall() {
    this.httpClient.get(this.baseUrl)
      .subscribe((data)=>{
        console.log(data);
      });
  }
  
  getUsers() {
    return this.httpClient.get(this.baseUrl);
  }
  
  getUser(id:number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  
  deleteUser(id:number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
