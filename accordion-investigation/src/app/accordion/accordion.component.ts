import { Component, Input, OnInit } from '@angular/core';
import AccordionItem from '../accordion-item.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <accordion-item 
        (expanded) = "onExpanded($event)"
        *ngFor="let item of items"
        [item]="item">

      </accordion-item>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  onExpanded(itemThatExpanded:AccordionItem) {
    // close all of the accordion items
    // except the one that just changed

    for (let item of this.items) {

      if (item != itemThatExpanded) {

        item.expanded = false;
      }
    }
  }


  @Input()title: string = "";
  @Input()items: AccordionItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
