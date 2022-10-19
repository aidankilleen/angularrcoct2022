import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from '../user.model';

@Component({
  selector: 'user-table',
  template: `
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
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="onEdit(user)">Edit</button>
            <button (click)="onDelete(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[] = [];
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(userToDelete:User) {
    if (confirm(`Delete user ${userToDelete.id}`)) {
      // emit the delete event
      this.delete.emit(userToDelete);
    }
  }
  onEdit(userToEdit: User) {
    this.edit.emit(userToEdit);
  }
}
