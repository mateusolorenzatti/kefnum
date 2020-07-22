import { Input, OnInit, Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'kef-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }
}
