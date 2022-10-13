import { Component, Input, OnInit } from '@angular/core';
import User from '../user.model';

@Component({
  selector: 'user',
  template: `
    <div [ngStyle]="{
        'background-color': 
          user.active ? 'lightgreen' : 'lightgray'
      }">
      Name: {{user.name}}<br>
      Email: {{user.email}}<br>
    </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User = new User(0, "", "", false);

  constructor() { }

  ngOnInit(): void {
  }

}
