import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(public httpClient: HttpClient) { }

  testAjaxCall() {
    this.httpClient.get("http://localhost:3000/users/")
      .subscribe((data)=>{
        console.log(data);
      });
  }

  
  getUsers() {

    return this.httpClient.get("http://localhost:3000/users/");
  }


  
  /*
  getUser(id:number): User {

  }
  */
}
