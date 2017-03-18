import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent  {
	todos: Todo[] = todos;
	title: string = 'Angular 2Do';

	create( title: string ) {
		const todo = new Todo(title);
		//this.todos.push(todo);
		console.log(todo);
	}
}