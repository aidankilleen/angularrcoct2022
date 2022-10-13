import { Component, Input, OnInit } from '@angular/core';
import User from './user.model';

@Component({
  selector: 'user-list',
  template: `
    <h2>{{ title }}</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[] = [];
  @Input() title = "";

  constructor() { }

  ngOnInit(): void {
  }

}
