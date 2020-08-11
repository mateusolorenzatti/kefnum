import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'kef-request-error',
  templateUrl: './request-error.component.html'
})
export class RequestErrorComponent implements OnInit {

  constructor(private router: Router, private theme: ThemeManagerService, private userService: UserService) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }

  limparDados(){   

    this.userService.clearData();

    this.router.navigate(['/login']);
  }

}
