import { Component } from '@angular/core';

const todos = [
  {
    title: 'learn js',
    completed: true
  },
  {
    title: 'learn angula2',
    completed: false
  },
  {
    title: 'write app',
    completed: false
  }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      title = 'angular 2do';
      todos = todos;
}