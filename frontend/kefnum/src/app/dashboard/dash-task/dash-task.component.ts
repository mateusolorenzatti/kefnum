import { Input, OnInit, Component } from '@angular/core';
import { Task } from 'src/app/core/task/task';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'kef-dash-task',
  templateUrl: './dash-task.component.html',
})
export class DashTaskComponent implements OnInit {

  @Input() task: Task;

  constructor(private theme: ThemeManagerService) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }
}
