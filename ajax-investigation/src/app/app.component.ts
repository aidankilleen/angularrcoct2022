import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './user-http.service';
import User from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Users List</h1>

    <user-table 
      [users]="users"
      (delete)="onDeleteFromTable($event)"
      (edit)="onEditFromTable($event)"
    >
    </user-table>

    <user-dialog
      [show]="editing"
      [user]="editingUser"
      (save)="onSaveFromDialog($event)"
    >
    </user-dialog>






    <hr>
    <div *ngIf="editing">
      <h2> Old User Dialog</h2>

      Name:<input [(ngModel)]="editingUser.name"><br>
      Email:<input [(ngModel)]="editingUser.email"><br>
      Active:<input 
              type="checkbox" 
              [(ngModel)]="editingUser.active"><br>

      <button (click)="onSaveUser()">Save</button>
      <button (click)="editing=false">Cancel</button>
    </div>
    <hr>





    <hr>

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

    <button (click)="onNewUser()">New User</button>
    <button (click)="onDelete()">Delete</button>
    <button (click)="onEdit()">Edit</button>
    {{ selectedUser | json }}<br>
    {{ editingUser | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  editingUser:User = new User(undefined, "", "", false);
  title = 'ajax-investigation';

  selectedId:number = 0;
  selectedUser: User | undefined;

  users:User[] = [];

  editing = false;

  constructor(public userService: UserService, public userHttpService: UserHttpService) {
  }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onDeleteFromTable(userToDelete:User) {
    
    let id = userToDelete.id ? userToDelete.id : -1;
    this.userHttpService.deleteUser(id)
      .subscribe(()=>{
        let index = this.users.findIndex(user => user.id == id);
        this.users.splice(index, 1);
      });
  }

  onEditFromTable(userToEdit: User) {

    this.editingUser = new User(userToEdit.id, 
                                userToEdit.name, 
                                userToEdit.email, 
                                userToEdit.active);
    this.editing = true;
    
  }



  onNewUser() {
    this.editingUser = new User(undefined, "", "", false);
    this.editing = true;
  }
  onEdit () {
    this.editingUser = new User(this.selectedUser?.id, 
                                this.selectedUser?.name, 
                                this.selectedUser?.email, 
                                this.selectedUser?.active);
    this.editing = true;
  }


  onSaveFromDialog(userToSave: User) {

    if (userToSave.id == undefined) {
      // new user (no id)
      this.userHttpService.addUser(userToSave)
      .subscribe((data)=> {
        let addedUser = data as User;
        this.users.push(addedUser);
        this.editing = false;
      })

    } else {
      // update 
      this.userHttpService.updateUser(userToSave)
      .subscribe(() => {

        let index = this.users.findIndex(user => user.id == userToSave.id);

        // replace the user at this index with the updated user
        this.users.splice(index, 1, userToSave);

        this.editing = false;

      });
    }
  }




  onSaveUser() {
    //let newUser = new User(undefined,"New User From UI", "nu@gmail.com", false);

    // add a new user 
    // or update an existing user     !TBD - how do we know the difference???

    if (this.editingUser.id == undefined) {
      // no id => add 
      this.userHttpService.addUser(this.editingUser)
      .subscribe((data)=> {
        let addedUser = data as User;
        this.users.push(addedUser);
        this.editing = false;
      })

    } else {
      // update
      this.userHttpService.updateUser(this.editingUser)
        .subscribe(() => {

          let index = this.users.findIndex(user => user.id == this.selectedId);

          // replace the user at this index with the updated user
          this.users.splice(index, 1, this.editingUser);

          this.editing = false;

        });

    }
  }
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
