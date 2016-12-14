import { Component } from '@angular/core';

export class Todo {
    constructor(public title: string,
                public completed:boolean) {
      
    }
}

const todos: Todo[] = [
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
      title: string = 'angular 2do';
      todos: Todo[] = todos;
      newTodoTitle: string = '';

      create() {
        let completed: boolean = false;
        let todo: Todo = new Todo(this.newTodoTitle,completed);
        this.todos.push(todo);
        this.newTodoTitle = '';

      }

      toggle(todo: Todo) {
        todo.completed = !todo.completed;
      }

      delete(todo: Todo) {
        let index = this.todos.indexOf(todo)

        if(index > -1) {
          this.todos.splice(index,1);
        }
      }
}