import { Component } from '@angular/core';
import { UserHttpService } from './user-http.service';
import User from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Users List</h1>
    <select size="7" 
      [(ngModel)]="selectedId"
      (change)="onChange()">
      <option 
        *ngFor="let user of users"
        [value]="user.id"  
      >
        {{ user.name }}
      </option>
    </select>

    <button (click)="onGetUsers()">Get Users</button>

    <table>
      <tbody>
        <tr><td>Id</td><td>{{ selectedUser?.id }}</td></tr>
        <tr><td>Name</td><td>{{ selectedUser?.name }}</td></tr>
        <tr><td>Email</td><td>{{ selectedUser?.email }}</td></tr>
        <tr><td>Active</td><td>{{ selectedUser?.active }}</td></tr>
      </tbody>
    </table>

    <button (click)="onDelete()">Delete</button>

    <button (click)="onTestAjax()">
      Test Ajax
    </button>

    <hr>
    {{ selectedUser | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onDelete() {
    if (confirm("Are you sure?")) {
      this.userHttpService.deleteUser(this.selectedId)
      .subscribe(()=>{
        let index = this.users.findIndex(user => user.id == this.selectedId);

        this.users.splice(index, 1);

        this.selectedId = 0;
        this.selectedUser = new User(0, "", "", false);
      });

    }
  }


  title = 'ajax-investigation';

  selectedId:number = 0;
  selectedUser: User | undefined;

  users:User[] = [];

  constructor(public userService: UserService, public userHttpService: UserHttpService) {
  }

  onGetUsers() {
    //alert("get the users");
    this.userHttpService.getUsers()
      .subscribe((data)=> {
        this.users = data as User[];
      });
  }
  
  onTestAjax() {
    this.userHttpService.testAjaxCall();
  }
  onChange() {
    this.userHttpService.getUser(this.selectedId)
      .subscribe((data)=>{
        this.selectedUser = data as User;
      });
  }

 




}
