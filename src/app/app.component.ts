import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  programmers =["Johnson","Nicholas","James","Anderson","Harrison"]
  currentFont="Agency FB"
  fonts=["Comic Sans MS","Arial","Times New Roman","Agency FB","Courier","Forte","Consolas"]
}
