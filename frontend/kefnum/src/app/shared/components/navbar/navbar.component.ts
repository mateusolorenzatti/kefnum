import { Component, OnInit, Input } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'kef-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  @Input('collapse') 
  public collapse: boolean;

  constructor(private theme: ThemeManagerService) { }

  ngOnInit(): void {
    this.collapse = this.collapse !== undefined;
  }

  getTemaAtual(){
    return this.theme.getTheme();
  }

  temaEscuro(){
    this.theme.setTheme(0);
  }
  
  temaClaro(){
    this.theme.setTheme(1);
  }
}
