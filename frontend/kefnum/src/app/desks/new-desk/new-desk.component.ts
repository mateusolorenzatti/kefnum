import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Cor } from '../desk-form/cor';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { DeskService } from 'src/app/core/desk/desk.service';
import { Desk } from 'src/app/core/desk/desk';

@Component({
  selector: 'kef-new-desk',
  templateUrl: './new-desk.component.html'
})
export class NewDeskComponent implements OnInit {

  constructor(private theme: ThemeManagerService
    ) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }
}
