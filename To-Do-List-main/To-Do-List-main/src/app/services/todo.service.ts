import { Injectable } from '@angular/core';
import { Todos } from '../types/todos';

@Injectable({
  providedIn: 'root'
})
export class  TodoService {

  constructor() {
    const storedTodos = localStorage.getItem('todos');
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
   }

  todos: Todos[];

  addTodo(todo: string): void {
    this.todos.push({
      isCompleted: false,
      todo,
      id: this.todos.length + 1
    })
     
    localStorage.setItem('todos', JSON.stringify(this.todos))
    localStorage.getItem('todos');
    
  }

  completeTodo(id: number): void {
    this.todos.forEach((todo, index)=> {
      if (todo.id === id) {
        this.todos[index].isCompleted = !this.todos[index].isCompleted;
      }
    })
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    this.todos.splice(id -1, 1);
    this.todos.forEach((todo, index)=> {
      this.todos[index].id = index + 1;
    })
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
}
