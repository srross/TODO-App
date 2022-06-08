import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor(
    private service: ToDoService
  ) {} /*dependencyinjection of service*/

  ngOnInit(): void {}

  toDoItems = this.service.getToDoItems();

  completeTask(task: ToDo) {
    task.completed = true;
  }

  submitForm(form: any) {
    console.log(form);
    this.toDoItems.push({ task: form.value['activity'], completed: false });
    form.reset();
  }
}
