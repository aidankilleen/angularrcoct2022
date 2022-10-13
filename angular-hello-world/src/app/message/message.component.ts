import { Component, Input, OnInit } from '@angular/core';
import Message from './message.model';

@Component({
  selector: 'message',
  template: `
    <div 
      (click)="onClick()" 
      [ngStyle]="{
        'background-color': read ? 'lightcoral' : 'lightblue',
        'border-width': read ? '1px' : '4px'
      }"
    >
      <h2>{{ message.title }}</h2>
      <p>{{ message.text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message = new Message();

  //@Input() title = "Test Message";
  //@Input() text = "This is a test message";
  read = false;

  onClick() {
    // alert("you clicked the message");
    this.read = !this.read;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
