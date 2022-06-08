import { Injectable } from '@angular/core';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor() {}

  getToDoItems(): Array<ToDo> {
    return [
      { task: 'Sweep floors', completed: false },
      { task: 'Wash Dishes', completed: true },
      { task: 'Laundry', completed: false },
    ];
  }
}
