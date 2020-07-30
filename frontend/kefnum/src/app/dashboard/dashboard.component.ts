import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';
import { Router } from '@angular/router';
import { User } from '../core/user/user';
import { ThemeManagerService } from '../core/theme/theme-manager.service';

@Component({
  selector: 'kef-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public user: User;
  public mensagemPeriodoDoDia: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private theme: ThemeManagerService
  ) { }

  ngOnInit(): void {
    this.definirPeriodoDoDia();

    this.userService.refreshUserData().subscribe(
      data => {
        this.user = data[0];
        this.userService.setUserLocal(this.user);
        this.mensagemPeriodoDoDia += ", " + this.user?.first_name
      });
  }

  private definirPeriodoDoDia(){
    var today = new Date();
    var time = today.getHours();

    if( time >= 0 && time < 12 ){
      this.mensagemPeriodoDoDia = "Bom dia";
    }else if ( time >= 12 && time < 18 ){
      this.mensagemPeriodoDoDia = "Boa tarde";
    } else{
      this.mensagemPeriodoDoDia = "Boa noite";
    }
  }
}
