import { Component } from '@angular/core';

@Component({ 
	moduleId: module.id,
	selector: 'authentication',
	templateUrl: 'authentication.component.html',
	styleUrls: ['authentication.component.css']
})

export class AuthenticationAppComponent {
	authSubmit() {
		console.log(this);
	}
}