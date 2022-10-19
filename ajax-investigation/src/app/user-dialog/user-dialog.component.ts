import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from '../user.model';

@Component({
  selector: 'user-dialog',
  template: `<div *ngIf="show">
          <h2>User Dialog</h2>

          Name:<input [(ngModel)]="user.name"><br>
          Email:<input [(ngModel)]="user.email"><br>
          Active:<input 
                  type="checkbox" 
                  [(ngModel)]="user.active"><br>
          <button (click)="onSave()">Save</button>
          <button (click)="show=false">Cancel</button>


  </div>`,
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  @Input() user = new User(undefined, "", "", false);
  @Input() show = false;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSave() {
    this.save.emit(this.user);
  }
  
}
