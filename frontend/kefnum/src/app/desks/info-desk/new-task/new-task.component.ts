import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/user/user';
import { Desk } from 'src/app/core/desk/desk';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { TaskService } from 'src/app/core/task/task.service';
import { Task } from 'src/app/core/task/task';

@Component({
  selector: 'kef-new-task',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;

  @Input() user: User;
  @Input() desk: Desk;
  @Input() sucesso: Function;

  constructor(
    private formBuilder: FormBuilder, 
    private theme: ThemeManagerService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.newTaskForm = this.formBuilder.group({
      descricao: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ]
    }); 

    this.theme.applyTheme();
  }

  createTask(){
    const task = this.newTaskForm.getRawValue() as Task;

    task.user = this.user.id;
    task.desk = this.desk.id;
    task.pendente = true;
    task.ativa = true;

    this.taskService.newTask(task).subscribe(
      () => {          
        this.sucesso();
      },
      err => {
        console.log(err);
      }
    );
  }
}
