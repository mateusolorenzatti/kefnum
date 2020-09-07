import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'kef-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private theme: ThemeManagerService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.theme.applyTheme();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['dashboard']),
        err => {
          console.log(err);
          this.loginForm.reset();

          this.alertService.danger('Usuário ou senha inválidos!', true);
        }
      );
  }
}

