import { Component } from '@angular/core';
import AccordionItem from './accordion-item.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <accordion [items]="items">
    </accordion>

    <hr>
    <accordion [items]="newsItems" title="News"></accordion>
   <!--
    <hr>
    {{ items | json }}
    -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the accordion test';

  items = [new AccordionItem("Test Item 1", 
                          "this is a test item", 
                          true), 
        new AccordionItem("Item 2", "this is item 2", false), 
        new AccordionItem("Item 3", "this is item 3", false), 
        new AccordionItem("Item 4", "this is item 4", false) 
      ];

  newsItems = [
    new AccordionItem("News 1", "News item 1", true), 
    new AccordionItem("News 2", "News item 2", false), 
    new AccordionItem("News 3", "News item 3", false)
  ];
}
