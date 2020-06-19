import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'kef-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private theme: ThemeManagerService) { }

  ngOnInit(): void {
    this.theme.applyTheme();
  }
}
