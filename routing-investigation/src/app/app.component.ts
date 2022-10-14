import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Professional Training Website</h1>
      <nav>
        <a routerLink="/home" routerLinkActive="active-navigation">Home</a> |
        <a routerLink="/about" routerLinkActive="active-navigation">About</a> |
        <a routerLink="/contact" routerLinkActive="active-navigation">Contact Us</a>
      </nav>
      <hr>

      <router-outlet></router-outlet>

    </div>
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-investigation';
}
