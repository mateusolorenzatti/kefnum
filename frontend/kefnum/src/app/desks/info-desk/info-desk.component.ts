import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Desk } from 'src/app/core/desk/desk';
import { DeskService } from 'src/app/core/desk/desk.service';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';
import { TaskService } from 'src/app/core/task/task.service';
import { Task } from 'src/app/core/task/task';

@Component({
  selector: 'kef-info-desk',
  templateUrl: './info-desk.component.html'
})
export class InfoDeskComponent implements OnInit {

  id: number;

  desk: Desk;
  user: User;

  resolvidas: number;

  modoAdicionar: boolean;
  taskAdicionada = () => {
    this.modoAdicionar = false;

    this.atualizarInfo();
  }

  constructor(
    private route: ActivatedRoute,
    private deskService: DeskService,
    private taskService: TaskService,
    private userService: UserService,
    private theme: ThemeManagerService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.atualizarInfo();
    
    this.user = this.userService.getUser();
  }

  atualizarInfo(){
    this.deskService.getDeskInfo(this.id).subscribe(
      desk => {
        this.desk = desk;
        this.resolvidas = desk.tasks.filter((task) => !task.pendente).length;

        setTimeout(() => { this.theme.applyTheme(); }, 10 );
      },
      err => {
        console.log(err);
      });
  }

  novaTaskRow(){
    this.modoAdicionar = !this.modoAdicionar;
  }

  deletarTask(taskId){
    this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.atualizarInfo();
        },
        err => {
          console.log(err);
        }
    );
  }

  toggleTask(taskId, condicao){

    const task = { pendente: !condicao } as Task;

    this.taskService.updateTask(taskId, task).subscribe(
      () => {
        this.atualizarInfo();
      },
      err => {
        console.log(err);
      }
    );
  }
}
