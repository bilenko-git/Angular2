import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const todos = [
			{
				id: 1,
				title: 'Изучить JS',
				completed: true
			},
			{
				id: 2,
				title: 'Изучить Angular 2',
				completed: true
			},
			{
				id: 3,
				title: 'Написать приложение',
				completed: false
			},
			{
				id: 4,
				title: '1 Написать приложение',
				completed: false
			},
		];

		return { todos };
	}
}
