import { Component, OnInit, Input } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

@Component({
  selector: 'kef-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  @Input('collapse') 
  public collapse: boolean;

  constructor(
    public theme: ThemeManagerService,
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.collapse = this.collapse !== undefined;
  }

  alterarTema(){
    this.theme.toggleTheme();
  }

  logout(){
    this.userService.logout().add(() =>
      this.router.navigate([''])
    );
  }

  homeAction(){
    this.userService.isLogged() ? this.router.navigate(['/dashboard']) : this.router.navigate(['']);
  }
}
