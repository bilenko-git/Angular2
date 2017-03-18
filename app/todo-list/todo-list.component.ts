import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
	moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
	@Input() todos: Todo[];

	toggle( todo: any ) {
		todo.completed = !todo.completed;
		console.log('toggle', todo);
	}

	delete( todo: any ) {
		console.log(todo);
		let index = this.todos.indexOf( todo );

		if( index > -1 ) {
			this.todos.splice( index, 1 );
		}
	}
}
