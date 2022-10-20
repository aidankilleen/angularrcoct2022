import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../user-http.service';
import User from '../user.model';

@Component({
  selector: 'app-user-list-page',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users:User[] = [];

  constructor(private userService: UserHttpService) { }

  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe(data => {
        this.users = data as User[];
      });

  }

}
