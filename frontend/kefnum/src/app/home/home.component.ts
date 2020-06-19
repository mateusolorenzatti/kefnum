import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from '../core/theme/theme-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private theme: ThemeManagerService
  ) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }
}
