import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [ngStyle]="{
      'color': darkMode ? 'white' : 'black', 
      'background-color': darkMode ? 'black' : 'white'
    }">
    <h1>{{ title | titlecase }}</h1>

    Name: <input [value]="name" (keyup)="onChange(txtName.value)" #txtName>
    <button (click)="name='Aidan'">reset</button><br>

    City: <input [(ngModel)]="city">
    <button (click)="city='Dublin'">reset</button><br>

    Country: <select [(ngModel)]="country" size="10">
      <option *ngFor="let country of countryList">
        {{country}}
      </option>
    </select>
    <button (click)="country='Spain'">reset</button><br>

    Dark Mode: <input type="checkbox" [(ngModel)]="darkMode"><br>

    <input type="range" [(ngModel)]="width">

    <div class="box" [ngStyle]="{'width': width + 'px'}">
      {{ width }}
    </div>

    <input type="range" [(ngModel)]="angle" max="360">

    <div class="box" [ngStyle]="{
        'transform':'rotate(' + angle + 'deg)'
      }">
    </div>

    <div [ngStyle]="{'background-color': acceptConditions ? 'lightgreen' : 'lightcoral'}">
    <input type="checkbox" [(ngModel)]="acceptConditions">Accept terms and conditions

    <button [disabled]="!acceptConditions" (click)="onClick()">Submit</button>

    </div>

    <hr>
    {{ acceptConditions }}
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  acceptConditions = false;
  title = 'data binding investigation';
  name = "Aidan";
  city = "Dublin";
  country = "Spain";
  darkMode = false;
  width = 50;
  angle = 0;
  countryList = ["Ireland", "UK", "Spain", 
                 "Portugal", "France", "Germany", 
                "Poland", "Holland", "Belgium", 
                "Italy", "Greece"];

  onClick() {
    alert("hello")    ;
  }
  onChange(updatedName: string) {
    console.log(updatedName);
    this.name = updatedName;
  }
}
