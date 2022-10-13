import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  template: `
    <div [ngStyle]="{
        'width':width + 'px', 
        'height':height + 'px', 
        'background-color': colour, 
        'border-width': selected ? '3px' : '1px'
      }"
      (click)="onClicked()"
    >
      Box
      {{ selected }}
    </div>
  `,
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() width = 50;
  @Input() height = 50;
  @Input() colour = 'lightcoral';

  selected = false;

  onClicked() {
    this.selected = !this.selected;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
