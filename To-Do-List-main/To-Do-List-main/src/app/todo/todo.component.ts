import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todos } from '../types/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todos[];
  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }
  addTodo(todo: string): void  {
    this.todoService.addTodo(todo);
  }

}