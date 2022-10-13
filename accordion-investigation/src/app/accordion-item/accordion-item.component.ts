import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import AccordionItem from '../accordion-item.model';

@Component({
  selector: 'accordion-item',
  template: `
    <div>
      <div class="accordion-item-header"
        (click)="onClick()"
        [ngStyle]="{
              'background-color': item.expanded ? 'lightblue' : 'lightgreen'
            }"        
      >
        <h2>
          {{ item.title }}
        </h2>
        <span *ngIf="item.expanded">^</span>
        <span *ngIf="!item.expanded">v</span>
      </div> 
      <p *ngIf="item.expanded">
        {{ item.content }}
      </p>
    </div>
  
  `,
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  onClick() {
    this.item.expanded = !this.item.expanded;
    this.expanded.emit(this.item);
  }

  @Output() expanded = new EventEmitter();
  @Input() item: AccordionItem = 
    new AccordionItem("", "", false);
  
  constructor() { }

  ngOnInit(): void {
  }

}
