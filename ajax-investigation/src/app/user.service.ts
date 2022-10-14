import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", false), 
    new User(3, "Carol", "carol@gmail.com", true), 
    new User(4, "Dan", "dan@gmail.com", false), 
    new User(5, "Eve", "eve@gmail.com", true), 
    new User(6, "Fred", "fred@gmail.com", false),
    new User(7, "Ger", "ger@gmail.com", true) 
  ];
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
  getUser(id: number): User | undefined {
    let user = this.users.find(user => user.id == id);
    return user;
  }
}
