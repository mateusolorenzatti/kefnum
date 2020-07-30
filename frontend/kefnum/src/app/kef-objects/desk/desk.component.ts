import { Component, OnInit, Input } from '@angular/core';
import { Desk } from './desk';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'kef-desk',
  templateUrl: './desk.component.html',
})
export class DeskComponent implements OnInit {

  @Input() desk: Desk;

  tasks: Task[] = [];
  resolvidas: number;

  constructor(public taskService: TaskService, private theme: ThemeManagerService) { }

  ngOnInit(): void {
    this.theme.applyTheme();
    
    this.taskService.refreshData(this.desk.id)
      .subscribe(
        tasks => {
          this.tasks = tasks;
          this.resolvidas = tasks.filter((task) => !task.pendente).length;
        },
        err => {
          console.log(err);
        }
      )
  }

}
