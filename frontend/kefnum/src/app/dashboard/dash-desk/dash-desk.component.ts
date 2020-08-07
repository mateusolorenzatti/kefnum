import { Component, OnInit, Input } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { Task } from 'src/app/core/task/task';
import { TaskService } from 'src/app/core/task/task.service';
import { Desk } from 'src/app/core/desk/desk';

@Component({
  selector: 'kef-dash-desk',
  templateUrl: './dash-desk.component.html',
})
export class DashDeskComponent implements OnInit {

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
