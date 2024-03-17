import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output('OnNewTodo') TodoProps = new EventEmitter<string>()
  addTodo(event: Event): void {
    
    this.TodoProps.emit((<HTMLInputElement>event.target).value);
    (<HTMLInputElement>event.target).value = '';
  }

}
