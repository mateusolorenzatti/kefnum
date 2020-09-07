import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Cor } from './cor';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { UserService } from 'src/app/core/user/user.service';
import { DeskService } from 'src/app/core/desk/desk.service';
import { Router } from '@angular/router';
import { Desk } from 'src/app/core/desk/desk';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'kef-desk-form',
  templateUrl: './desk-form.component.html'
})
export class DeskFormComponent implements OnInit {

  newDeskForm: FormGroup;

  cores: Cor[];
  estilo_select: string = "border-kefnum_pink bg-kefnum_pink"; 

  @Input() desk: Desk = null;
  @Input() sucesso: Function = null;
  modoEdicao: boolean = false;

  constructor(
    private theme: ThemeManagerService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private deskService: DeskService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.cores = [
      new Cor('kefnum_pink', ' Kefnum Pink'),
      new Cor('viesco_blue', 'Viesco Blue'),
      new Cor('angular_red', 'Angular Red'),
      new Cor('softy_violet', 'Softy Violet'),
      new Cor('django_green', 'Django Green'),
      new Cor('quarantine_gray', 'Quarantine Gray'),
      new Cor('postman_orange', 'Postman Orange'),
      new Cor('camp_brown', 'Camp Brown')
    ];
    
    this.newDeskForm = this.formBuilder.group({
      nome: [,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      cor: [ , [Validators.required]]
    });  

    this.modoEdicao = this.desk ? true : false;

    if (this.modoEdicao) this.newDeskForm.setValue({nome: this.desk?.nome, cor: this.desk?.cor });

    this.theme.applyTheme();
  }

  submit(){
    (!this.desk) ? this.createDesk() : this.updateDesk(); 
  }

  createDesk(): void {
    const desk = this.newDeskForm.getRawValue() as Desk
    desk.user = this.userService.getUser().id as number;

    this.deskService.newDesk(desk)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
          this.alertService.success('Desk adicionada com Sucesso!', true);
        },
        err => this.router.navigate(['/requesterror']));
  }

  updateDesk(){
    const deskAtualizada = this.newDeskForm.getRawValue() as Desk;

    this.deskService.updateDask(this.desk.id, deskAtualizada)
      .subscribe(
        () => this.sucesso(),
        err => this.router.navigate(['/requesterror']));
  }
}
