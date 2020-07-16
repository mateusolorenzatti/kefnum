import { Component, OnInit, Input } from '@angular/core';
import { Desk } from './desk';
import { TaskService } from './task/task.service';
import { Task } from './task/task';

@Component({
  selector: 'kef-desk',
  templateUrl: './desk.component.html',
})
export class DeskComponent implements OnInit {

  @Input() desk: Desk;

  tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.refreshData(this.desk.id)
      .subscribe(
        tasks => {
          this.tasks = tasks;
          console.log(tasks);
        },
        err => {
          console.log(err);
        }
      )
  }

}
