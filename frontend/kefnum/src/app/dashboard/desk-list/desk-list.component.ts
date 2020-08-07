import { Component, OnInit } from '@angular/core';
import { Desk } from 'src/app/core/desk/desk';
import { DeskService } from 'src/app/core/desk/desk.service';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';

@Component({
  selector: 'kef-desk-list',
  templateUrl: './desk-list.component.html'
})
export class DeskListComponent implements OnInit {

  desks: Desk[] = [];

  constructor(public deskService: DeskService) { }

  ngOnInit(): void {
    this.deskService.refreshData()
      .subscribe(
        desks => {
          this.desks = desks;
          console.log(desks);
        },
        err => {
          console.log(err);
        });
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
