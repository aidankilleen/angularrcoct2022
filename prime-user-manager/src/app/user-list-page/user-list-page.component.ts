import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { UserHttpService } from '../user-http.service';
import User from '../user.model';

@Component({
  selector: 'app-user-list-page',
  template: `

    <button 
      pButton 
      class="p-button-success"
      (click)="onAddUser()">
      Add User
    </button>
    <p-table [value]="users">
      <ng-template pTemplate="header">
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Active</th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.active }}</td>
            <td>
              <button 
                pButton 
                class="p-button-rounded p-button-danger"
                icon="pi pi-times"
                (click)="onDelete(user)">
              </button>
            </td>
        </tr>
    </ng-template>

    </p-table>

    <p-confirmDialog 
      header="Confirmation" 
      icon="pi pi-exclamation-triangle">
    </p-confirmDialog>

    <p-dialog 
      header="Add User" 
      [(visible)]="displayUserDialog"
    >
      Name: <input [(ngModel)]="editingUser.name"/><br>
      Email: <input [(ngModel)]="editingUser.email"/><br>
      Active: <input [(ngModel)]="editingUser.active" type="checkbox"/><br>

      <ng-template pTemplate="footer">
        <p-button 
          (click)="onUserDialogSave()" 
          label="Save" 
          styleClass="p-button-success">
        </p-button>
        <p-button 
          (click)="displayUserDialog=false" 
          label="Cancel" 
          styleClass="p-button-text">
        </p-button>

      </ng-template>
    </p-dialog>
  `,
  styleUrls: ['./user-list-page.component.css'],
  providers: [ConfirmationService]
})
export class UserListPageComponent implements OnInit {

  users:User[] = [];
  displayUserDialog: boolean = false;

  editingUser: User = new User(undefined, "", "", false);

  onUserDialogSave() {

    this.userService.addUser(this.editingUser)
      .subscribe(data => {

        let addedUser = data as User;
        this.users.push(addedUser);
        this.displayUserDialog = false;
    
      });
  }



  constructor(private userService: UserHttpService, 
              private confirmationService: ConfirmationService) { }

  onAddUser() {
    this.displayUserDialog = true;
  }

  onDelete(user:User) {
    this.confirmationService.confirm({
      message: `Delete ${user.name}?`, 
      accept: () => {
        let id = user.id ? user.id : -1;
        this.userService.deleteUser(id)
          .subscribe(()=>{
            let index = this.users.findIndex(user => user.id == id);
            this.users.splice(index, 1);
          });
      }
    })
  }

  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe(data => {
        //alert(JSON.stringify(data));
        this.users = data as User[];
      });

  }

}
