import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
      <i class="pi pi-users" style="font-size:2.5em;"></i>
      </ng-template>
    </p-menubar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prime-user-manager';
  items: MenuItem[] = [
    {
      label: "Home", 
      routerLink: "/home"
    },
    {
      label: "About",
      routerLink: "/about"
    }, 
    {
      label: "Contact Us", 
      routerLink: "/contact"
    }, 
    {
      label: "Users", 
      routerLink: "/users"
    }
  ]
}
