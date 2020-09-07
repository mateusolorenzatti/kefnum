import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desk } from 'src/app/core/desk/desk';
import { DeskService } from 'src/app/core/desk/desk.service';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';
import { TaskService } from 'src/app/core/task/task.service';
import { Task } from 'src/app/core/task/task';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

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
  modoEditar: boolean = false;

  deskAtualizada = () => {
    this.modoEditar = false;

    this.atualizarInfo();
  }

  taskAdicionada = () => {
    this.modoAdicionar = false;

    this.atualizarInfo();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deskService: DeskService,
    private taskService: TaskService,
    private userService: UserService,
    private alertService: AlertService,
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
      err => this.router.navigate(['/requesterror']));;
  }

  novaTaskRow(){
    this.modoAdicionar = !this.modoAdicionar;
  }

  deletarTask(taskId){
    this.taskService.deleteTask(taskId).subscribe(
        () => this.atualizarInfo(),
        err => this.router.navigate(['/requesterror'])
    );
  }

  toggleTask(taskId, condicao){

    const task = { pendente: !condicao } as Task;

    this.taskService.updateTask(taskId, task).subscribe(
      () => this.atualizarInfo(),
      err => this.router.navigate(['/requesterror'])
    );
  }

  toggleEditar(){
    this.modoEditar = !this.modoEditar;

    setTimeout(() => { this.theme.applyTheme(); }, 10 );
  }

  deletarDesk(){
    this.deskService.deleteDesk(this.desk.id).subscribe(
        () => { 
          this.router.navigate(['/dashboard']); 
          this.alertService.success('Desk removida com Sucesso!', true);
        },
        err => {
          this.router.navigate(['/dashboard']);
          this.alertService.danger('Erro ao remover Desk', true);
        }
    );
  }
}
