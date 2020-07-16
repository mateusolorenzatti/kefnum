import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kef-password',
  templateUrl: './passwordshow.component.html',
})
export class PasswordShowComponent implements OnInit {

  @Input() parentForm: FormGroup;
  mostrarSenha: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  acaoMostrarSenha(){
    this.mostrarSenha = !this.mostrarSenha;
  }
}
