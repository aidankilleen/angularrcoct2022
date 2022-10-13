import { Component } from '@angular/core';
import User from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Typescript Investigation</h1>
    
    <user [user]="user"></user>
    <hr>

    {{ user.getAsTable() }}
    <!--<user [user]="user2"></user>-->

    <hr>

    {{ count }} 
    <button (click)="onClick()">+</button>
    <button (click)="count=count-1">-</button>

    <button 
      (click)="onStart()"
      [disabled]="timer != undefined"
      >start</button>
    <button (click)="onStop()"
      [disabled]="timer == undefined"
      >stop</button>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public timer:NodeJS.Timer | undefined;

  onStart() {
    this.count++;

    this.timer = setInterval(() => {
      this.count++;
    }, 500);
  }

  onStop() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  title = 'typescript-investigation';

  user = new User(1, "Alice", "alice@gmail.com", false);

  user2 = {
    id: 2, 
    name: "Bob", 
    email: "bob@gmail.com", 
    active: true
  };

  count: number = 0;

  onClick() {
    //alert("you clicked");

    this.count++;



  }

}
