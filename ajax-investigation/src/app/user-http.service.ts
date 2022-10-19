import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addUser(userToAdd: User) {

    // remove id from the user so the REST service 
    // will assign a unique id.
    delete userToAdd.id;
    return this.httpClient.post(this.baseUrl, userToAdd, {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    });
  }
}
