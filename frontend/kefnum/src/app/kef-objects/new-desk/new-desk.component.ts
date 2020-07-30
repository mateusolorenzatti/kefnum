import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Cor } from './cor';
import { Desk } from '../desk/desk';
import { UserService } from 'src/app/core/user/user.service';
import { DeskListComponent } from '../desk-list/desk-list.component';
import { DeskService } from '../desk/desk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-desk',
  templateUrl: './new-desk.component.html'
})
export class NewDeskComponent implements OnInit {

  newDeskForm: FormGroup;

  cores: Cor[];
  estilo_select: string = "border-kefnum_pink bg-kefnum_pink"; 

  constructor(
    private theme: ThemeManagerService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private deskService: DeskService,
    private router: Router) { }

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
      nome: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      cor: [,
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ]
    });  

    this.theme.applyTheme();
  }

  trocaSelect(): void {
    this.estilo_select = "bg-" + this.newDeskForm.value.cor + " border-" + this.newDeskForm.value.cor;
  }

  createDesk(): void {
    const desk = this.newDeskForm.getRawValue() as Desk
    desk.user = this.userService.getUser().id as number;

    this.deskService.newDesk(desk)
      .subscribe(
        () => {          
          this.router.navigate(['/dashboard']);
        },
        err => {
          console.log(err);
        });
  }

}
