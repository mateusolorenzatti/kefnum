import { Component, OnInit } from '@angular/core';
import { Desk } from 'src/app/core/desk/desk';
import { DeskService } from 'src/app/core/desk/desk.service';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'kef-desk-list',
  templateUrl: './desk-list.component.html'
})
export class DeskListComponent implements OnInit {

  desks: Desk[] = [];

  constructor(public deskService: DeskService, private router: Router) { }

  ngOnInit(): void {
    this.deskService.refreshData()
      .subscribe(
        desks => this.desks = desks,
        err => this.router.navigate(['/requesterror']));
  }

  mouseEnterDesk(event){
    let elemento = event.target;
    elemento.classList.remove("p-1");
    elemento.classList.add("p-0");
  }
  
  mouseLeaveDesk(event){
    let elemento = event.target;
    elemento.classList.remove("p-0");
    elemento.classList.add("p-1");
  }

}
