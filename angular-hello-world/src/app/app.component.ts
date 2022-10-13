import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Hello World</h1>

    <box [width]="50" [height]="50" colour="red">
    </box>
    <box [width]="150" [height]="20" colour="green">
    </box>
    <box [width]="50" [height]="120" colour="blue">
    </box>

    <div>Is this a box?</div>

    <!--
    <user-list [users]="users" title="All Users">
    </user-list>

    <hr>

    <user-list [users]="activeUsers" title="Active Users"></user-list>

    <message *ngFor="let message of messages" [message]="message"></message>
    -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Hello World';
  name = 'Aidan';
  list = ["one", "two", "three", "four", "five"];

  users = [
    { id:1, name:"Alice", email:"alice@gmail.com", active: true}, 
    { id:2, name:"Bob", email:"bob@gmail.com", active: true}, 
    { id:3, name:"Carol", email:"carol@gmail.com", active: false}, 
    { id:4, name:"Dan", email:"dan@gmail.com", active: true}, 
    { id:5, name:"Eve", email:"eve@gmail.com", active: false}
  ];

  activeUsers = [
    { id:1, name:"Alice", email:"alice@gmail.com", active: true}, 
    { id:2, name:"Bob", email:"bob@gmail.com", active: true}, 
    { id:4, name:"Dan", email:"dan@gmail.com", active: true}
  ];


  messages = [
    { title: "Message 1", text: "This is message 1"}, 
    { title: "Message 2", text: "This is message 2"}, 
    { title: "Message 3", text: "This is message 3"}
  ];




  
}
