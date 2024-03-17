import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todos } from '../types/todos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input('todos') todosProps: Todos[] = [];

  constructor(private todosService: TodoService) {}

  completeTodo(id: number): void {
    this.todosService.completeTodo(id);
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }
}
