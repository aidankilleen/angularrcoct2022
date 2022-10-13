import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    {{ today | date | uppercase }}
    <br>

    {{ pi | currency:cur }}

  <hr>

  <p>{{ message | summary:150 }}</p>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cur = 'USD';
  title = 'pipe investigation';

  today = new Date();

  pi = 22/7;

  message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint vero ratione illo dolorum quisquam explicabo officia consequatur, est autem minima dolore molestias. Quis cum dolorem voluptate excepturi iste! Excepturi."



}
