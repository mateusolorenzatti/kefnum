import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private theme: ThemeManagerService) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }

}
